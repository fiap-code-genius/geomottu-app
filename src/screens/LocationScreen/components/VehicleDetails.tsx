import React from 'react';
import { Vehicle } from '../../../types/vehicle';
import { VehicleId, GrayButton, GreenButton, ButtonText } from '../styles';

interface Props {
  vehicle: Vehicle;
  onDetails: () => void;
  onNewSearch: () => void;
}

const VehicleDetails = ({ vehicle, onDetails, onNewSearch }: Props) => (
  <>
    <VehicleId>
      {vehicle.plate} - {vehicle.chassis}
    </VehicleId>
    <GrayButton onPress={onDetails}>
      <ButtonText style={{ color: '#fff' }}>Detalhes do veículo</ButtonText>
    </GrayButton>
    <GreenButton onPress={onNewSearch}>
      <ButtonText style={{ color: '#000' }}>Nova Busca</ButtonText>
    </GreenButton>
  </>
);

export default VehicleDetails;
