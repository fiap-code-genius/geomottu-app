import AsyncStorage from '@react-native-async-storage/async-storage';

export const HISTORY_KEY = '@vehicle_search_history';

export const getHistory = async (): Promise<string[]> => {
  try {
    const historyRaw = await AsyncStorage.getItem(HISTORY_KEY);
    return historyRaw ? JSON.parse(historyRaw) : [];
  } catch (e) {
    console.log('Erro ao carregar histórico', e);
    return [];
  }
};

export const clearHistoryStorage = async (): Promise<void> => {
  await AsyncStorage.removeItem(HISTORY_KEY);
};
