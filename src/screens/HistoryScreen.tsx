import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const HISTORY_KEY = '@vehicle_search_history';

type HistoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Location'>;

const HistoryScreen = () => {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const [history, setHistory] = useState<string[]>([]);

  const loadHistory = async () => {
    try {
      const historyRaw = await AsyncStorage.getItem(HISTORY_KEY);
      const parsed = historyRaw ? JSON.parse(historyRaw) : [];
      setHistory(parsed);
    } catch (e) {
      console.log('Erro ao carregar histórico', e);
    }
  };

  const clearHistory = async () => {
    Alert.alert('Confirmação', 'Deseja limpar o histórico?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          await AsyncStorage.removeItem(HISTORY_KEY);
          setHistory([]);
        },
      },
    ]);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleSelect = (id: string) => {
    navigation.navigate('Location', { vehicleId: id });
  };

  return (
    <Container>
      <Header>
        <Title>Histórico</Title>
      </Header>

      <FlatList
        data={history}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <HistoryItem onPress={() => handleSelect(item)}>
            <HistoryText>{item}</HistoryText>
          </HistoryItem>
        )}
        ListEmptyComponent={<EmptyText>Nenhum histórico disponível</EmptyText>}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const HistoryItem = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #333;
`;

const HistoryText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  text-align: center;
  margin-top: 40px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export default HistoryScreen;
