import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainTabsParamList } from './MainTabs';

import LoginScreen from '../screens/LoginScreen';
import HelpScreen from '../screens/HelpScreen';
import MainTabs from './MainTabs';
import HelpSearchScreen from '../screens/HelpSearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import AdminScreen from '../screens/AdminScreen';
import { AuthContext } from '../context/AuthContext';

export type RootStackParamList = {
  Login: undefined;
  Help: undefined;
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  HelpSearch: undefined;
  SearchResult: { vehicleId: string; username: string };
  Location: { vehicleId: string };
  Admin: undefined;  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
        </>
      ) : currentUser?.role === 'admin' ? (
        <>
          <Stack.Screen name="Admin" component={AdminScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="HelpSearch" component={HelpSearchScreen} />
          <Stack.Screen name="SearchResult" component={SearchResultScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
