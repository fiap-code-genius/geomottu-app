import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../navigation/SearchStackNavigator';
import { useAuth } from '../context/AuthContext';
import { getVehicleById } from '../types/vehicle';

type VehicleScreenRouteProp = RouteProp<SearchStackParamList, 'Vehicle'>;
type VehicleScreenNavigationProp = NativeStackNavigationProp<SearchStackParamList, 'Vehicle'>;

type Props = {
  route: VehicleScreenRouteProp;
};

const VehicleScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<VehicleScreenNavigationProp>();
  const { vehicleId } = route.params;
  const { currentUser: username } = useAuth();

  const vehicle = username ? getVehicleById(username, vehicleId) : undefined;

  const handleBack = () => {
    navigation.goBack();
  };

  if (!vehicle) {
    return (
      <Container>
        <BackButton onPress={handleBack}>
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </BackButton>
        <Title>Veículo não encontrado</Title>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onPress={handleBack}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </BackButton>

      <Title>{vehicle.plate} - {vehicle.chassis}</Title>

      <SectionTitle>Placa</SectionTitle>
      <SectionValue>{vehicle.plate}</SectionValue>

      <SectionTitle>Chassi</SectionTitle>
      <SectionValue>{vehicle.chassis}</SectionValue>

      <SectionTitle>Status</SectionTitle>
      <SectionValue status={vehicle.status}>
        {vehicle.status === 'regular' ? 'Regular' : 'Irregular'}
      </SectionValue>

      <SectionTitle>Manutenção</SectionTitle>
      <SectionValue>{vehicle.needsMaintenance ? 'Sim' : 'Não'}</SectionValue>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
`;

const BackButton = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  padding: 5px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 40px;
`;

const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 4px;
`;

const SectionValue = styled.Text<{ status?: string }>`
  color: ${({ status, theme }) =>
    status === 'irregular' ? 'red' : status === 'regular' ? 'white' : theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 24px;
`;

export default VehicleScreen;
