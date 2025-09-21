import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = '@vehicle_search_history';

export const addHistory = async (id: string) => {
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
