import { UserProfile, users } from '../types/account.types';


export const getUserByUsername = (username?: string): UserProfile | undefined => {
  if (!username) return undefined;
  return users.find((u) => u.username === username);
};
