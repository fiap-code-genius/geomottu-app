import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Vehicle } from '../../../types/vehicle';
import { Title, Subtitle, IDContainer, VehicleID, SearchButton, SearchText } from '../styles';

interface Props {
  vehicle: Vehicle;
  onBackToSearch: () => void;
}

const ResultFound = ({ vehicle, onBackToSearch }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Title>ID encontrado!</Title>
      <Subtitle>O ID do veículo é</Subtitle>
      <IDContainer>
        <Ionicons
          name="document-text-outline"
          size={28}
          color={theme.colors.text}
        />
        <VehicleID>{`${vehicle.plate}-${vehicle.chassis}`}</VehicleID>
      </IDContainer>
      <SearchButton onPress={onBackToSearch}>
        <SearchText>Buscar Mottu</SearchText>
      </SearchButton>
    </>
  );
};

export default ResultFound;
