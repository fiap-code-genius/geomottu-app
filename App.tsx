import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProviderApp, useThemeApp } from "./src/context/ThemeContext";

function AppWithTheme() {
  const { theme } = useThemeApp();

  return (
    <ThemeProvider theme={theme}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Afacad: require("./assets/fonts/Afacad.ttf"),
    Ionicons: require("./assets/fonts/Ionicons.ttf"),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
