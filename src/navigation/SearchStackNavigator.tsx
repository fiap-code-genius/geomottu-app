import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import LocationScreen from '../screens/LocationScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import VehicleScreen from '../screens/VehicleScreen';


export type SearchStackParamList = {
  SearchMain: undefined;
  Location: { vehicleId: string };
  SearchResult: { vehicleId: string };
  Vehicle: { vehicleId: string };
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
