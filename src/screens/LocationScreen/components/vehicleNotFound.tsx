import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { VehicleId, GreenButton, ButtonText } from '../styles';

interface Props {
  onNewSearch: () => void;
}

const VehicleNotFound = ({ onNewSearch }: Props) => {
  useEffect(() => {
    Alert.alert(
      'Veículo não encontrado',
      'O ID informado não existe na base.',
      [
        { text: 'Nova busca', onPress: onNewSearch },
        { text: 'Fechar', style: 'cancel' },
      ],
      { cancelable: true }
    );
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
