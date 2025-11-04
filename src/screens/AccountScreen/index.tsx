import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Circle,
  Title,
  Subtitle,
  SectionTitle,
  SectionValue,
} from './styles';
import { useThemeApp } from '../../context/ThemeContext';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';

type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  Location: undefined;
};

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { currentUser } = useAuth();
  const { toggleTheme, isDark } = useThemeApp();
  const theme = useTheme();

  if (!currentUser) {
    return (
      <Container>
        <Title>Carregando…</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Circle />
      <Title>{currentUser.name}</Title>
      <Subtitle>{currentUser.location}</Subtitle>

      <SectionTitle>Nome de usuário</SectionTitle>
      <SectionValue>{currentUser.username}</SectionValue>

      <SectionTitle>Veículos registrados</SectionTitle>
      <SectionValue>{currentUser.vehicleCount}</SectionValue>

      <SectionTitle>Modo Escuro</SectionTitle>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: theme.colors.muted, true: theme.colors.primary }}
        thumbColor={isDark ? theme.colors.highlight : theme.colors.buttonText}
      />
    </Container>
  );
};

export default AccountScreen;
