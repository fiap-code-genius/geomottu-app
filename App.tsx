import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Afacad: require('./assets/fonts/Afacad.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
