import { useAuth } from '../../../context/AuthContext';
import { getUserByUsername } from '../services/account.service';
import { UserProfile } from '../types/account.types';

export const useAccount = (): UserProfile | undefined => {
  const { currentUser } = useAuth();

  if (!currentUser) return undefined;  

  return getUserByUsername(currentUser);
};
