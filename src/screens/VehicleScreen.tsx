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
        <Message>Veículo não encontrado.</Message>
      </Container>
    );
  }


  return (
    <Container>
      <BackButton onPress={handleBack}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </BackButton>


      <Title>{vehicle.plate}-{vehicle.chassis}</Title>
      <Field>
        Placa: <FieldValue>{vehicle.plate}</FieldValue>
      </Field>
      <Field>
        Chassi: <FieldValue>{vehicle.chassis}</FieldValue>
      </Field>
      <Field>
        Status:{' '}
        <FieldValue status={vehicle.status}>
          {vehicle.status === 'regular' ? 'Regular' : 'Irregular'}
        </FieldValue>
      </Field>
      <Field>
        Manutenção: <FieldValue>{vehicle.needsMaintenance ? 'Sim' : 'Não'}</FieldValue>
      </Field>
    </Container>
  );
};


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  justify-content: center;
  position: relative;
`;


const BackButton = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 10;
  padding: 5px;
`;


const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 32px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;


const Field = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
`;


const FieldValue = styled.Text<{ status?: string }>`
  font-weight: bold;
  color: ${({ status }) =>
    status === 'irregular' ? 'red' : status === 'regular' ? 'green' : '#fff'};
`;


const Message = styled.Text`
  font-size: 18px;
  text-align: center;
  color: red;
  font-family: ${({ theme }) => theme.fontFamily};
`;


export default VehicleScreen;
