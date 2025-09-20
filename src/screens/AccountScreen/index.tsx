import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { users, UserProfile } from './types/account.types';
import { Container, Circle, Title, Subtitle, SectionTitle, SectionValue } from './styles';

type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  Location: undefined;
};

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { currentUser } = useAuth();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('MainTabs');
    }
  };

  if (!currentUser) {
    return (
      <Container>
        <Title>Usuário não encontrado</Title>
      </Container>
    );
  }

  const userDetails = users.find((u: UserProfile) => u.username === currentUser);

  if (!userDetails) {
    return (
      <Container>
        <Title>Dados do usuário não disponíveis</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Circle />
      <Title>{userDetails.name}</Title>
      <Subtitle>{userDetails.location}</Subtitle>

      <SectionTitle>Nome de usuário</SectionTitle>
      <SectionValue>{userDetails.username}</SectionValue>

      <SectionTitle>Veículos registrados</SectionTitle>
      <SectionValue>{userDetails.vehicleCount}</SectionValue>
    </Container>
  );
};

export default AccountScreen;
