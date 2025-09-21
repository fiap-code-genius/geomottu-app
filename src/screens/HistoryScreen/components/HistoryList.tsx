import React from 'react';
import { FlatList } from 'react-native';
import { EmptyText } from '../styles';
import HistoryItem from './HistoryItem';

interface Props {
  data: string[];
  onSelect: (id: string) => void;
}

const HistoryList = ({ data, onSelect }: Props) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item}
    renderItem={({ item }) => (
      <HistoryItem id={item} onPress={() => onSelect(item)} />
    )}
    ListEmptyComponent={<EmptyText>Nenhum histórico disponível</EmptyText>}
  />
);

export default HistoryList;
