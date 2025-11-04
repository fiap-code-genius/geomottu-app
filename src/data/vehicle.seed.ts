import { Vehicle } from '../types/vehicle';

export type UserVehiclesMap = {
  [username: string]: Vehicle[];
};

export const vehiclesSeed: UserVehiclesMap = {
  mpin: [
    { plate: 'MP1', chassis: '1', status: 'regular', needsMaintenance: false },
    { plate: 'MP2', chassis: '2', status: 'irregular', needsMaintenance: true },
  ],
  mbut: [
    { plate: 'MB1', chassis: '3', status: 'regular', needsMaintenance: false },
    { plate: 'MB2', chassis: '4', status: 'irregular', needsMaintenance: true },
    { plate: 'MB3', chassis: '5', status: 'regular', needsMaintenance: false },
  ],
};
