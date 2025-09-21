import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Title, Subtitle, IDContainer, VehicleID } from '../styles';

interface Props {
  vehicleId: string;
}

const ResultNotFound = ({ vehicleId }: Props) => (
  <>
    <Title>Veículo não encontrado</Title>
    <Subtitle>ID buscado:</Subtitle>
    <IDContainer>
      <Ionicons name="alert-circle-outline" size={28} color="#f00" />
      <VehicleID>{vehicleId}</VehicleID>
    </IDContainer>
  </>
);

export default ResultNotFound;
