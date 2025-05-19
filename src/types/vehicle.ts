export type Vehicle = {
  plate: string;
  chassis: string;
  status: 'regular' | 'irregular';
  needsMaintenance: boolean;
};


type UserVehiclesMap = {
  [username: string]: Vehicle[];
};


export const vehiclesByUser: UserVehiclesMap = {
  mpin: [
    {
      plate: 'MP1',
      chassis: '1',
      status: 'regular',
      needsMaintenance: false,
    },
    {
      plate: 'MP2',
      chassis: '2',
      status: 'irregular',
      needsMaintenance: true,
    },
  ],
  mbut: [
    {
      plate: 'MB1',
      chassis: '3',
      status: 'regular',
      needsMaintenance: false,
    },
    {
      plate: 'MB2',
      chassis: '4',
      status: 'irregular',
      needsMaintenance: true,
    },
    {
      plate: 'MB3',
      chassis: '5',
      status: 'regular',
      needsMaintenance: false,
    },
  ],
};


export const getVehiclesByUser = (username: string): Vehicle[] => {
  return vehiclesByUser[username] || [];
};


export const getVehicleById = (username: string, id: string): Vehicle | undefined => {
  const list = getVehiclesByUser(username);
  return list.find(
    v => `${v.plate}-${v.chassis}`.toLowerCase() === id.toLowerCase()
  );
};
