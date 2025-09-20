import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import BackButton from './components/BackButtom';
import SearchForm from './components/SearchForm';

const HelpSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <SearchForm navigation={navigation} />
    </Container>
  );
};

export default HelpSearchScreen;
