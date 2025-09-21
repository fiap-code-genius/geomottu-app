import React from 'react';
import { Container, Logo, Title, Subtitle } from './styles';
import LoginForm from './components/LoginForm';

const LoginScreen = () => {
  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} resizeMode="contain" />
      <Title>GeoMottu</Title>
      <Subtitle>Faça login para localizar o veículo</Subtitle>
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;
