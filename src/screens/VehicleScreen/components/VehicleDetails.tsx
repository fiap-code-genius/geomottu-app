import React from 'react';
import { Vehicle } from '../../../types/vehicle';
import { Title, SectionTitle, SectionValue } from '../styles';

interface Props {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle }: Props) => (
  <>
    <Title>
      {vehicle.plate} - {vehicle.chassis}
    </Title>

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
  </>
);

export default VehicleDetails;
