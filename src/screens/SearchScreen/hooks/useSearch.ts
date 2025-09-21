import { useAuth } from '../../../context/AuthContext';
import { getVehicleById } from '../../../types/vehicle';
import { addHistory } from '../services/search.service';

export const useSearch = () => {
  const { currentUser: username } = useAuth();

  const validateVehicle = (username: string, vehicleId: string) => {
    return getVehicleById(username, vehicleId);
  };

  const addToHistory = async (id: string) => {
    await addHistory(id);
  };

  return { username, validateVehicle, addToHistory };
};
