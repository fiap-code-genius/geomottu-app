import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../navigation/SearchStackNavigator';
import { useAuth } from '../context/AuthContext';
import { getVehicleById, Vehicle } from '../types/vehicle';

type LocationScreenRouteProp = RouteProp<SearchStackParamList, 'Location'>;
type LocationScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Location'>;

const LocationScreen = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();
  const route = useRoute<LocationScreenRouteProp>();

  const vehicleId = route.params?.vehicleId;

  const { currentUser: username } = useAuth();

  useEffect(() => {
    if (!vehicleId) {
      navigation.navigate('SearchMain');
    }
  }, [vehicleId, navigation]);

  if (!vehicleId) {
    return null;
  }

  const vehicle: Vehicle | undefined =
    username && vehicleId ? getVehicleById(username, vehicleId) : undefined;

  const handleDetails = () => {
    if (!username) return;
    navigation.navigate('Vehicle', { vehicleId });
  };

  const handleNewSearch = () => {
    navigation.navigate('SearchMain');
  };

  if (!vehicle) {
    return (
      <Container>
        <Overlay />
        <BottomSheet>
          <DragIndicator />
          <VehicleId>Veículo não encontrado</VehicleId>
          <GreenButton onPress={handleNewSearch}>
            <ButtonText style={{ color: '#000' }}>Nova Busca</ButtonText>
          </GreenButton>
        </BottomSheet>
      </Container>
    );
  }

  return (
    <Container>
      <Overlay />
      <BottomSheet>
        <DragIndicator />
        <VehicleId>
          {vehicle.plate} - {vehicle.chassis}
        </VehicleId>
        <GrayButton onPress={handleDetails}>
          <ButtonText style={{ color: '#fff' }}>Detalhes do veículo</ButtonText>
        </GrayButton>
        <GreenButton onPress={handleNewSearch}>
          <ButtonText style={{ color: '#000' }}>Nova Busca</ButtonText>
        </GreenButton>
      </BottomSheet>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Overlay = styled.View`
  flex: 1;
`;

const BottomSheet = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  align-items: center;
`;

const DragIndicator = styled.View`
  width: 40px;
  height: 4px;
  background-color: #666;
  border-radius: 2px;
  margin-bottom: 16px;
`;

const VehicleId = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 24px;
  text-align: center;
`;

const GreenButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 24px;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  align-items: center;
`;

const GrayButton = styled.TouchableOpacity`
  background-color: #222;
  margin-bottom: 10px;
  padding: 10px 24px;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export default LocationScreen;
