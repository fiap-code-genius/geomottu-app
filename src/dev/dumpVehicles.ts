import { Alert } from 'react-native';
import { getVehiclesByUserAsync } from '../services/vehicleStorage';

export async function dumpVehicles(tag: string) {
  const users = ['mpin', 'mbut', 'admin'];  
  let msg = '';

  for (const u of users) {
    const list = await getVehiclesByUserAsync(u);
    msg += `${u}: ${list.length} veículos\n`;
  }

  Alert.alert(`🚗 DUMP [${tag}]`, msg || 'sem veículos');
  console.log(`=== DUMP [${tag}] ===\n${msg}`);
}
