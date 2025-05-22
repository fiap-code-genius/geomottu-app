import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { AuthContext } from '../context/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const { login } = authContext;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  if (!username || !password) {
    Alert.alert('Erro', 'Preencha todos os campos');
    return;
  }

  const success = await login(username, password);

  if (!success) {
    Alert.alert('Erro', 'Credenciais inválidas');
    return;
  }

  navigation.navigate('MainTabs', { screen: 'Search' });
};

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
      <Title>GeoMottu</Title>
      <Subtitle>Faça login para localizar o veículo</Subtitle>
      <Input
        placeholder="nome de usuário"
        placeholderTextColor="#aaaaaa"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="senha"
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <LoginButton onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </LoginButton>
      <HelpButton onPress={() => navigation.navigate('Help')}>
        <HelpText>?</HelpText>
      </HelpButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Subtitle = styled.Text`
  color: #ccc;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #222;
  border-radius: 8px;
  padding: 0 16px;
  color: #fff;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
`;

const HelpButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const HelpText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export default LoginScreen;
