import { useEffect, useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../../../navigation/SearchStackNavigator';
import { useAuth } from '../../../context/AuthContext';
import { getVehicleByIdAsync } from '../../../services/vehicleStorage';
import { Vehicle } from '../../../types/vehicle';

type LocationScreenRouteProp = RouteProp<SearchStackParamList, 'Location'>;
type LocationScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Location'>;

const norm = (s?: string) => (s ? s.trim().toLowerCase() : '');

export const useLocation = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();
  const route = useRoute<LocationScreenRouteProp>();
  const { vehicleId, username: paramUsername } = route.params || {};
  const { currentUser } = useAuth();

  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  useEffect(() => {
    if (!vehicleId) navigation.navigate('SearchMain');
  }, [vehicleId, navigation]);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      const userKey = norm(paramUsername) || norm(currentUser?.username);
      if (!userKey || !vehicleId) return;


      const v = await getVehicleByIdAsync(userKey, vehicleId.trim());
      if (alive) setVehicle(v);
    };
    load();
    return () => { alive = false; };
  }, [vehicleId, currentUser, paramUsername]);

  const handleDetails = () => {
    if (!vehicleId) return;
    navigation.navigate('Vehicle', { vehicleId });
  };

  const handleNewSearch = () => navigation.navigate('SearchMain');

  return { vehicle, vehicleId, handleDetails, handleNewSearch };
};
