import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import LocationScreen from '../screens/LocationScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import VehicleScreen from '../screens/VehicleScreen';


export type SearchStackParamList = {
  SearchMain: undefined;
  HelpSearch: undefined;
  Location: { vehicleId: string; username?: string };
  Vehicle: { vehicleId: string; username?: string };
  SearchResult: { vehicleId: string; username: string }; 
};



const Stack = createNativeStackNavigator<SearchStackParamList>();


const SearchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchMain" component={SearchScreen} />
    <Stack.Screen name="Location" component={LocationScreen} />
    <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    <Stack.Screen name="Vehicle" component={VehicleScreen} />
  </Stack.Navigator>
);


export default SearchStackNavigator;



