export type UserProfile = {
  username: string;
  password: string;
  name: string;
  location: string;
  vehicleCount: number;
};


export const users: UserProfile[] = [
  {
    username: 'mbut',
    password: '123',
    name: 'Mottu Butantã',
    location: 'Av. Valdemar Ferreira, 136',
    vehicleCount: 65,
  },
  {
    username: 'mpin',
    password: '123',
    name: 'Mottu Pinheiros',
    location: 'R. dos Pinheiros, 1000',
    vehicleCount: 42,
  },
];
