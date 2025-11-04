import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { SearchStackParamList } from '../../../navigation/SearchStackNavigator';
import { useAuth } from '../../../context/AuthContext';
import { getVehicleById, Vehicle } from '../../../types/vehicle';

type VehicleScreenRouteProp = RouteProp<SearchStackParamList, 'Vehicle'>;
type VehicleScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Vehicle'>;

export const useVehicle = () => {
  const navigation = useNavigation<VehicleScreenNavigationProp>();
  const route = useRoute<VehicleScreenRouteProp>();
  const { vehicleId } = route.params;
  const { currentUser } = useAuth();

  const vehicle: Vehicle | undefined = currentUser
    ? getVehicleById(currentUser.username, vehicleId)
    : undefined;

  const handleBack = () => {
    navigation.goBack();
  };

  return { vehicle, handleBack };
};
