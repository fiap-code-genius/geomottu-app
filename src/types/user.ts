export type UserProfile = {
  username: string;
  password: string;
  name: string;
  location: string;
  vehicleCount: number;
  role: 'branch' | 'admin';
};

export const users: UserProfile[] = [
  {
    username: 'mbut',
    password: '123',
    name: 'Mottu Butantã',
    location: 'Av. Valdemar Ferreira, 136',
    vehicleCount: 65,
    role: 'branch',
  },
  {
    username: 'mpin',
    password: '123',
    name: 'Mottu Pinheiros',
    location: 'R. dos Pinheiros, 1000',
    vehicleCount: 42,
    role: 'branch',
  },
  {
    username: 'admin',
    password: 'admin',
    name: 'Administrador Geral',
    location: 'Painel Central',
    vehicleCount: 0,
    role: 'admin',
  },
];
