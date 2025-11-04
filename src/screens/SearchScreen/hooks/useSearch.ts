import { useAuth } from '../../../context/AuthContext';
import { getVehicleByIdAsync, getVehiclesByUserAsync } from '../../../services/vehicleStorage';
import { addHistory } from '../services/search.service';

const norm = (s?: string) => (s ? s.trim().toLowerCase() : '');

export const useSearch = () => {
  const { currentUser } = useAuth();

  const validateVehicle = async (usernameInput: string, vehicleIdInput: string) => {
    const userKey = norm(usernameInput) || norm(currentUser?.username);
    const id = vehicleIdInput?.trim();
    if (!userKey || !id) return undefined;

    const byId = await getVehicleByIdAsync(userKey, id);
    if (byId) return byId;

    if (!id.includes('-')) {
      const list = await getVehiclesByUserAsync(userKey);
      const byPlate = list.find(v => v.plate.toLowerCase() === id.toLowerCase());
      return byPlate;
    }

    return undefined;
  };

  const addToHistory = async (id: string) => {
    await addHistory(id);
  };

  return { username: currentUser?.username, validateVehicle, addToHistory };
};
