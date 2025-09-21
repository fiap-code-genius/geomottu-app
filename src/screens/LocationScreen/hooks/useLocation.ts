import { useEffect } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../../../navigation/SearchStackNavigator';
import { useAuth } from '../../../context/AuthContext';
import { getVehicleById, Vehicle } from '../../../types/vehicle';

type LocationScreenRouteProp = RouteProp<SearchStackParamList, 'Location'>;
type LocationScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Location'>;

export const useLocation = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();
  const route = useRoute<LocationScreenRouteProp>();

  const vehicleId = route.params?.vehicleId;
  const { currentUser: username } = useAuth();

  useEffect(() => {
    if (!vehicleId) {
      navigation.navigate('SearchMain');
    }
  }, [vehicleId, navigation]);

  const vehicle: Vehicle | undefined =
    username && vehicleId ? getVehicleById(username, vehicleId) : undefined;

  const handleDetails = () => {
    if (!username || !vehicleId) return;
    navigation.navigate('Vehicle', { vehicleId });
  };

  const handleNewSearch = () => {
    navigation.navigate('SearchMain');
  };

  return { vehicle, vehicleId, handleDetails, handleNewSearch };
};
