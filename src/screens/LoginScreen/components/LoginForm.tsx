import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { Input, LoginButton, ButtonText, HelpButton, HelpText } from '../styles';
import { useLogin } from '../hooks/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginForm = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useLogin();

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

  const stored = await AsyncStorage.getItem('currentUser');
  const user = stored ? JSON.parse(stored) : null;

  if (user?.role === 'admin') {
    navigation.navigate('Admin');
  } else {
    navigation.navigate('MainTabs', { screen: 'Search' });
  }
};


  return (
    <>
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
    </>
  );
};

export default LoginForm;
