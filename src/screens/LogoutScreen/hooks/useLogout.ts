import { useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const useLogout = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const doLogout = async () => {
      await logout();
    };
    doLogout();
  }, [logout]);
};
