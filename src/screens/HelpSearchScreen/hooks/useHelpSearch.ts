import { useAuth } from "../../../context/AuthContext";
import { createVehicleId } from "../services/helpsearch.services";

export const useHelpSearch = () => {
  const { currentUser } = useAuth();

  const generateVehicleId = (plate: string, chassis: string) => {
    return createVehicleId(plate, chassis);
  };

  return { currentUser, generateVehicleId };
};
