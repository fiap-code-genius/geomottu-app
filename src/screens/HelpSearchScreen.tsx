import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const HelpSearchScreen = () => {
  const [plate, setPlate] = useState('');
  const [chassis, setChassis] = useState('');
  const navigation = useNavigation<any>();
  const { currentUser } = useAuth();

  const handleSearch = () => {
    if (!plate || !chassis || !currentUser) return;
    const generatedVehicleId = `${plate.trim()}-${chassis.trim()}`;
    navigation.navigate('SearchResult', {
      vehicleId: generatedVehicleId,
      username: currentUser,
    });
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </BackButton>
      <ContentWrapper>
        <Title>Não tem o ID?</Title>
        <Subtitle>Insira as informações{'\n'}que a gente resolve :)</Subtitle>
        <Input placeholder="Placa" placeholderTextColor="#888" value={plate} onChangeText={setPlate} />
        <Input placeholder="Chassi" placeholderTextColor="#888" value={chassis} onChangeText={setChassis} />
        <SearchButton onPress={handleSearch}>
          <ButtonText>Pesquisar</ButtonText>
        </SearchButton>
      </ContentWrapper>
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

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #222;
  border-radius: 8px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export default HelpSearchScreen;
