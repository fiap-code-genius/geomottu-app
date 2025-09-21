import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { getVehicleById, Vehicle } from '../../../types/vehicle';

type SearchResultScreenRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;
type SearchResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchResult'>;

export const useSearchResult = () => {
  const navigation = useNavigation<SearchResultScreenNavigationProp>();
  const route = useRoute<SearchResultScreenRouteProp>();
  const { vehicleId, username } = route.params;

  const vehicle: Vehicle | undefined = getVehicleById(username, vehicleId);

  const handleBackToSearch = () => {
    navigation.navigate('MainTabs', { screen: 'Search' });
  };

  return { vehicle, vehicleId, handleBackToSearch };
};
