import { useState } from 'react';
import { vehiclesByUser, Vehicle } from '../../../types/vehicle';

export const useAdmin = () => {
  const [data, setData] = useState(vehiclesByUser);

  const getAllVehicles = () => {
    return Object.entries(data).flatMap(([username, vehicles]) =>
      vehicles.map((v) => ({
        ...v,
        username,
        branchName: username.toUpperCase(),
      }))
    );
  };

  const addVehicle = (username: string, newVehicle: Vehicle) => {
    setData((prev) => ({
      ...prev,
      [username]: [
        ...(prev[username] || []),
        { ...newVehicle, chassis: Date.now().toString() },
      ],
    }));
  };

  const deleteVehicle = (username: string, chassis: string) => {
    setData((prev) => ({
      ...prev,
      [username]: prev[username].filter((v) => v.chassis !== chassis),
    }));
  };

  const updateVehicle = (
    username: string,
    chassis: string,
    updatedFields: Partial<Vehicle>
  ) => {
    setData((prev) => ({
      ...prev,
      [username]: prev[username].map((v) =>
        v.chassis === chassis ? { ...v, ...updatedFields } : v
      ),
    }));
  };

  const moveVehicle = (
  oldUsername: string,
  newUsername: string,
  chassis: string,
  updatedFields: Partial<Vehicle>
) => {
  setData((prev) => {
    const oldList = prev[oldUsername] || [];
    const vehicle = oldList.find((v) => v.chassis === chassis);
    if (!vehicle) return prev;

    const updatedVehicle = { ...vehicle, ...updatedFields };

    return {
      ...prev,
      [oldUsername]: oldList.filter((v) => v.chassis !== chassis),
      [newUsername]: [...(prev[newUsername] || []), updatedVehicle],
    };
  });
};

return { getAllVehicles, addVehicle, deleteVehicle, updateVehicle, moveVehicle };

};
