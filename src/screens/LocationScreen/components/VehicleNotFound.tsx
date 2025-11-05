import React, { useEffect } from 'react';
import { VehicleId, GreenButton, ButtonText } from '../styles';

interface Props {
  onNewSearch: () => void;
}

const VehicleNotFound = ({ onNewSearch }: Props) => {
  useEffect(() => {
    
  }, [onNewSearch]);

  return (
    <>
      <VehicleId>Veículo não encontrado</VehicleId>
      <GreenButton onPress={onNewSearch}>
        <ButtonText style={{ color: '#000' }}>Nova Busca</ButtonText>
      </GreenButton>
    </>
  );
};

export default VehicleNotFound;
