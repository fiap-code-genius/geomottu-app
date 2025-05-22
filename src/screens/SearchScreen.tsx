import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import { getVehicleById } from '../types/vehicle';

const HISTORY_KEY = '@vehicle_search_history';

type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Location'>;

const SearchScreen = () => {
  const [vehicleId, setVehicleId] = useState('');
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const { currentUser: username } = useAuth();

  const addToHistory = async (id: string) => {
    try {
      const historyRaw = await AsyncStorage.getItem(HISTORY_KEY);
      let history: string[] = historyRaw ? JSON.parse(historyRaw) : [];
      history = history.filter((item) => item !== id);
      history.unshift(id);
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.log('Erro ao salvar histórico', e);
    }
  };

  const handleSearch = async () => {
    if (!vehicleId.trim()) {
      Alert.alert('Erro', 'Digite um ID de veículo');
      return;
    }

    if (!username) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return;
    }

    const vehicle = getVehicleById(username, vehicleId);

    if (!vehicle) {
      Alert.alert('Erro', 'Veículo não encontrado');
      return;
    }

    await addToHistory(vehicleId);
    navigation.navigate('Location', { vehicleId });
  };

  return (
    <Container>
      <Content>
        <YellowDot />
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
        <HelpText onPress={() => navigation.navigate('HelpSearch')}>Preciso de ajuda</HelpText>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #666;
`;

const Content = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 24px 100px;
  align-items: center;
`;

const YellowDot = styled.View`
  width: 40px;
  height: 40px;
  background-color: #FFD600;
  border-radius: 20px;
  position: absolute;
  top: -20px;
`;

const InstructionText = styled.Text`
  color: #fff;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Input = styled.TextInput`
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin-top: 12px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const HelpText = styled.Text`
  color: #aaa;
  margin-top: 16px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export default SearchScreen;
