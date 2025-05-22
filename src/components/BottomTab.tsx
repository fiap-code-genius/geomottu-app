import React from 'react';
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import HistoryScreen from '../screens/HistoryScreen';


const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja sair do aplicativo?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: () => {
          console.log('Usuário saiu');
        },
      },
    ]);
  };


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#111',
          height: 70,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ color, size }) => {
          let iconName = 'help';
          switch (route.name) {
            case 'Conta':
              iconName = 'person-outline';
              break;
            case 'Buscar':
              iconName = 'search-outline';
              break;
            case 'Histórico':
              iconName = 'time-outline';
              break;
            case 'Sair':
              iconName = 'exit-outline';
              break;
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Conta" component={AccountScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
      <Tab.Screen name="Histórico" component={HistoryScreen} />
      <Tab.Screen
        name="Sair"
        component={() => null}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            handleLogout();
          },
        }}
      />
    </Tab.Navigator>
  );
};


export default BottomTabs; 