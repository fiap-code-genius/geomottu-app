import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, InstructionText, SearchButton, ButtonText, HelpText } from '../styles';
import { useSearch } from '../hooks/useSearch';

const SearchForm = () => {
  const [vehicleId, setVehicleId] = useState('');
  const navigation = useNavigation<any>();
  const { username, validateVehicle, addToHistory } = useSearch();

  const handleSearch = async () => {
    if (!vehicleId.trim()) {
      Alert.alert('Erro', 'Digite um ID de veículo');
      return;
    }

    if (!username) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return;
    }

    const vehicle = validateVehicle(username, vehicleId);

    if (!vehicle) {
      Alert.alert('Erro', 'Veículo não encontrado');
      return;
    }

    await addToHistory(vehicleId);
    navigation.navigate('Location', { vehicleId });
  };

  return (
    <>
      <InstructionText>Insira o ID do veículo para continuar</InstructionText>
      <Input
        placeholder="ID do veículo"
        placeholderTextColor="#888"
        value={vehicleId}
        onChangeText={setVehicleId}
      />
      <SearchButton onPress={handleSearch}>
        <ButtonText>Buscar</ButtonText>
      </SearchButton>
      <HelpText onPress={() => navigation.navigate('HelpSearch')}>
        Preciso de ajuda
      </HelpText>
    </>
  );
};

export default SearchForm;
