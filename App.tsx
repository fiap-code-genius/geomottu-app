import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProviderApp, useThemeApp } from './src/context/ThemeContext';

function AppWithTheme() {
  const { theme } = useThemeApp();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Afacad: require('./assets/fonts/Afacad.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <ThemeProviderApp>
        <AppWithTheme />
      </ThemeProviderApp>
    </AuthProvider>
  );
}
