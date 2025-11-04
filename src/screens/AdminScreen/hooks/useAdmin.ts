import { useEffect, useState, useCallback } from 'react';
import type { Vehicle } from '../../../types/vehicle';
import {
  getAllVehicles,
  addVehicle as storageAdd,
  deleteVehicle as storageDelete,
  updateVehicle as storageUpdate,
  moveVehicle as storageMove,
} from '../../../services/vehicleStorage';

export const useAdmin = () => {
  const [data, setData] = useState<Record<string, Vehicle[]>>({});
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const all = await getAllVehicles();
    setData(all);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const getAllVehiclesFlat = () => {
    return Object.entries(data).flatMap(([username, vehicles]) =>
      vehicles.map(v => ({
        ...v,
        username,
        branchName: username.toUpperCase(),
      }))
    );
  };

  const addVehicle = async (username: string, newVehicle: Vehicle) => {
    await storageAdd(username.trim().toLowerCase(), newVehicle);
    await refresh();
  };

  const deleteVehicle = async (username: string, chassis: string) => {
    await storageDelete(username.trim().toLowerCase(), chassis);
    await refresh();
  };

  const updateVehicle = async (
    username: string,
    chassis: string,
    updatedFields: Partial<Vehicle>
  ) => {
    await storageUpdate(username.trim().toLowerCase(), chassis, updatedFields);
    await refresh();
  };

  const moveVehicle = async (
    oldUsername: string,
    newUsername: string,
    chassis: string,
    updatedFields: Partial<Vehicle>
  ) => {
    await storageMove(
      oldUsername.trim().toLowerCase(),
      newUsername.trim().toLowerCase(),
      chassis,
      updatedFields
    );
    await refresh();
  };

  return {
    loading,
    getAllVehicles: getAllVehiclesFlat,
    addVehicle,
    deleteVehicle,
    updateVehicle,
    moveVehicle,
    refresh,
  };
};
