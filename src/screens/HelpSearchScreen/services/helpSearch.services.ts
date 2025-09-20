export const createVehicleId = (plate: string, chassis: string): string => {
  return `${plate.trim()}-${chassis.trim()}`;
};
