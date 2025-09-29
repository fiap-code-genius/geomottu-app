import React from 'react';
import { Vehicle } from '../../../types/vehicle';
import {
  Title,
  GreenButton,
  GrayButton,
  ButtonText,
} from '../styles';

interface Props {
  vehicle: Vehicle;
  onDetails: () => void;
  onNewSearch: () => void;
}

const VehicleDetails = ({ vehicle, onDetails, onNewSearch }: Props) => (
  <>
    <Title>
      {vehicle.plate} - {vehicle.chassis}
    </Title>

    <GrayButton onPress={onDetails}>
      <ButtonText>Ver Detalhes</ButtonText>
    </GrayButton>

    <GreenButton onPress={onNewSearch}>
      <ButtonText>Nova Busca</ButtonText>
    </GreenButton>
  </>
);

export default VehicleDetails;
