import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { users, UserProfile } from '../types/user';


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


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
`;


const Circle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: yellow;
  align-self: center;
  margin-top: 60px;
  margin-bottom: 24px;
`;


const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;


const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 40px;
`;


const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 4px;
`;


const SectionValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 24px;
`;


export default AccountScreen;