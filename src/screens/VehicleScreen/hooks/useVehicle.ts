import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { SearchStackParamList } from '../../../navigation/SearchStackNavigator';
import { useAuth } from '../../../context/AuthContext';
import { getVehicleByIdAsync } from '../../../services/vehicleStorage';
import { Vehicle } from '../../../types/vehicle';

type VehicleScreenRouteProp = RouteProp<SearchStackParamList, 'Vehicle'>;
type VehicleScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Vehicle'>;

const norm = (s?: string) => (s ? s.trim().toLowerCase() : '');

export const useVehicle = () => {
  const navigation = useNavigation<VehicleScreenNavigationProp>();
  const route = useRoute<VehicleScreenRouteProp>();
  const { vehicleId } = route.params;
  const paramUsername = (route.params as any)?.username as string | undefined;
  const { currentUser } = useAuth();

  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  useEffect(() => {
    let active = true;
    const load = async () => {
      const userKey = norm(paramUsername) || norm(currentUser?.username);
      if (!userKey || !vehicleId) return;
      const v = await getVehicleByIdAsync(userKey, vehicleId);
      if (active) setVehicle(v);
    };
    load();
    return () => { active = false; };
  }, [vehicleId, currentUser, paramUsername]);

  const handleBack = () => navigation.goBack();

  return { vehicle, handleBack };
};
