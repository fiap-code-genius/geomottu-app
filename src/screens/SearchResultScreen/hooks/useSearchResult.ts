import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { getVehicleByIdAsync, getVehiclesByUserAsync } from '../../../services/vehicleStorage';
import { Vehicle } from '../../../types/vehicle';
import { useAuth } from '../../../context/AuthContext';

type SearchResultScreenRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;
type SearchResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchResult'>;

const norm = (s?: string) => (s ? s.trim().toLowerCase() : '');

export const useSearchResult = () => {
  const navigation = useNavigation<SearchResultScreenNavigationProp>();
  const route = useRoute<SearchResultScreenRouteProp>();
  const { currentUser } = useAuth();
  const { vehicleId, username: paramUsername } = route.params;

  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  useEffect(() => {
    let alive = true;
    const load = async () => {
      const userKey = norm(paramUsername) || norm(currentUser?.username);
      const id = vehicleId?.trim();
      if (!userKey || !id) {
        if (alive) setVehicle(undefined);
        return;
      }
      let v = await getVehicleByIdAsync(userKey, id);
      if (!v && !id.includes('-')) {
        const list = await getVehiclesByUserAsync(userKey);
        v = list.find(item => item.plate.toLowerCase() === id.toLowerCase());
      }
      if (alive) setVehicle(v);
    };
    load();
    return () => { alive = false; };
  }, [paramUsername, currentUser, vehicleId]);

  const handleBackToSearch = () => {
    navigation.navigate('MainTabs', { screen: 'Search' });
  };

  return { vehicle, vehicleId, handleBackToSearch };
};
