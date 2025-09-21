import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Title } from './styles';
import HistoryList from './components/HistoryList';
import { useHistory } from './hooks/useHistory';

const HistoryScreen = () => {
  const navigation = useNavigation<any>();
  const { history, handleSelect } = useHistory(navigation);

  return (
    <Container>
      <Header>
        <Title>Histórico</Title>
      </Header>

      <HistoryList data={history} onSelect={handleSelect} />
    </Container>
  );
};

export default HistoryScreen;
