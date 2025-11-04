export type Vehicle = {
  plate: string;
  chassis: string;
  status: 'regular' | 'irregular';
  needsMaintenance: boolean;
};