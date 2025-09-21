import React from 'react';
import { HistoryItemContainer, HistoryText } from '../styles';

interface Props {
  id: string;
  onPress: () => void;
}

const HistoryItem = ({ id, onPress }: Props) => (
  <HistoryItemContainer onPress={onPress}>
    <HistoryText>{id}</HistoryText>
  </HistoryItemContainer>
);

export default HistoryItem;
