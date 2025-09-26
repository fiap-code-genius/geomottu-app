import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import AccountScreen from '../screens/AccountScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SearchStackNavigator from './SearchStackNavigator';
import LogoutScreen from '../screens/LogoutScreen';

export type MainTabsParamList = {
  Profile: undefined;
  Search: undefined;
  History: undefined;
  Logout: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,  
        tabBarInactiveTintColor: theme.colors.secondaryText, 
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          title: 'Conta',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
          title: 'Buscar',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" color={color} size={size} />
          ),
          title: 'Histórico',
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="exit" color={color} size={size} />
          ),
          title: 'Sair',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
