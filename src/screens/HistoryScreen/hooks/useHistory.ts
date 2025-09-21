import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { HISTORY_KEY, getHistory, clearHistoryStorage } from '../services/history.service';

export const useHistory = (navigation: any) => {
  const [history, setHistory] = useState<string[]>([]);

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  const handleClear = async () => {
    Alert.alert('Confirmação', 'Deseja limpar o histórico?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          await clearHistoryStorage();
          setHistory([]);
        },
      },
    ]);
  };

  const handleSelect = (id: string) => {
    navigation.navigate('Location', { vehicleId: id });
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return { history, handleClear, handleSelect };
};
