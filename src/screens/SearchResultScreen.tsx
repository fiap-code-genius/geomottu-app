import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Vehicle, getVehicleById } from '../types/vehicle';

type SearchResultScreenRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;
type SearchResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchResult'>;

const SearchResultScreen = () => {
  const navigation = useNavigation<SearchResultScreenNavigationProp>();
  const route = useRoute<SearchResultScreenRouteProp>();
  const { vehicleId, username } = route.params;
  const vehicle: Vehicle | undefined = getVehicleById(username, vehicleId);

  const handleBackToSearch = () => {
    navigation.navigate('MainTabs', { screen: 'Search' });
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </BackButton>

      <Content>
        {!vehicle ? (
          <>
            <Title>Veículo não encontrado</Title>
            <Subtitle>ID buscado:</Subtitle>
            <IDContainer>
              <Ionicons name="alert-circle-outline" size={28} color="#f00" />
              <VehicleID>{vehicleId}</VehicleID>
            </IDContainer>
          </>
        ) : (
          <>
            <Title>ID encontrado!</Title>
            <Subtitle>O ID do veículo é</Subtitle>
            <IDContainer>
              <Ionicons name="document-text-outline" size={28} color="#fff" />
              <VehicleID>{`${vehicle.plate}-${vehicle.chassis}`}</VehicleID>
            </IDContainer>
            <SearchButton onPress={handleBackToSearch}>
          <SearchText>Buscar Mottu</SearchText>
        </SearchButton>
          </>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 10;
  padding: 5px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  color: #ccc;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 16px;
`;

const IDContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const VehicleID = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 24px;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  align-itens: center;
  text-align: center;
`;

const SearchText = styled.Text`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  color: #000;
  align-itens: center;
  text-align: center;
`;

export default SearchResultScreen;
