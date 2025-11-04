import AsyncStorage from '@react-native-async-storage/async-storage';
import { Vehicle } from '../types/vehicle';

type MapByUser = Record<string, Vehicle[]>;

const PRIMARY_KEY = '@vehicles_storage_v1';
const LEGACY_KEYS = ['@vehicles_by_user', 'vehiclesByUser_v1'];

const norm = (s: string) => s.trim().toLowerCase();

const normalizeMap = (map: any): MapByUser => {
  const out: MapByUser = {};
  if (!map || typeof map !== 'object') return out;
  Object.entries(map).forEach(([k, v]) => {
    out[norm(k)] = Array.isArray(v) ? v : [];
  });
  return out;
};

const readJSON = async (key: string) => {
  const raw = await AsyncStorage.getItem(key);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
};

const writeJSON = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const readAll = async (): Promise<MapByUser> => {
  const primary = normalizeMap(await readJSON(PRIMARY_KEY));
  if (Object.keys(primary).length > 0) return primary;

  for (const k of LEGACY_KEYS) {
    const legacy = normalizeMap(await readJSON(k));
    if (Object.keys(legacy).length > 0) {
      await writeJSON(PRIMARY_KEY, legacy);
      return legacy;
    }
  }
  return {};
};

const writeAll = async (map: MapByUser) => {
  await writeJSON(PRIMARY_KEY, normalizeMap(map));
};

export const getAllVehicles = async (): Promise<MapByUser> => readAll();

export const getVehiclesByUserAsync = async (username: string) => {
  const all = await readAll();
  return all[norm(username)] || [];
};

export const getVehicleByIdAsync = async (username: string, id: string) => {
  const list = await getVehiclesByUserAsync(username);
  const key = id.trim().toLowerCase();

  const byFull = list.find(v => `${v.plate}-${v.chassis}`.toLowerCase() === key);
  if (byFull) return byFull;

  const byPlate = list.find(v => v.plate.toLowerCase() === key);
  if (byPlate) return byPlate;

  const byChassis = list.find(v => v.chassis.toLowerCase() === key);
  if (byChassis) return byChassis;

  return undefined;
};

export const addVehicle = async (username: string, vehicle: Vehicle) => {
  const all = await readAll();
  const key = norm(username);
  const list = all[key] || [];
  const withId = { ...vehicle, chassis: vehicle.chassis || Date.now().toString() };
  all[key] = [...list, withId];
  await writeAll(all);
};

export const deleteVehicle = async (username: string, chassis: string) => {
  const all = await readAll();
  const key = norm(username);
  const list = all[key] || [];
  all[key] = list.filter(v => v.chassis !== chassis);
  await writeAll(all);
};

export const updateVehicle = async (username: string, chassis: string, patch: Partial<Vehicle>) => {
  const all = await readAll();
  const key = norm(username);
  const list = all[key] || [];
  all[key] = list.map(v => (v.chassis === chassis ? { ...v, ...patch } : v));
  await writeAll(all);
};

export const moveVehicle = async (
  fromUsername: string,
  toUsername: string,
  chassis: string,
  patch?: Partial<Vehicle>
) => {
  const all = await readAll();
  const fromKey = norm(fromUsername);
  const toKey = norm(toUsername);

  const fromList = all[fromKey] || [];
  const v = fromList.find(x => x.chassis === chassis);
  if (!v) return;

  all[fromKey] = fromList.filter(x => x.chassis !== chassis);
  const toList = all[toKey] || [];
  all[toKey] = [...toList, { ...v, ...patch }];
  await writeAll(all);
};
