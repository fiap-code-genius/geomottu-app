import React, { useState } from 'react';
import { ContentWrapper, Title, Subtitle, Input, SearchButton, ButtonText } from '../styles';
import { useHelpSearch } from '../hooks/useHelpSearch';

interface Props {
  navigation: any;
}

const SearchForm = ({ navigation }: Props) => {
  const [plate, setPlate] = useState('');
  const [chassis, setChassis] = useState('');
  const { currentUser, generateVehicleId } = useHelpSearch();

  const handleSearch = () => {
    if (!plate || !chassis || !currentUser) return;
    const vehicleId = generateVehicleId(plate, chassis);
    navigation.navigate('SearchResult', { vehicleId, username: currentUser });
  };

  return (
    <ContentWrapper>
      <Title>Não tem o ID?</Title>
      <Subtitle>Insira as informações{'\n'}que a gente resolve :)</Subtitle>

      <Input
        placeholder="Placa"
        placeholderTextColor="#888"
        value={plate}
        onChangeText={setPlate}
      />
      <Input
        placeholder="Chassi"
        placeholderTextColor="#888"
        value={chassis}
        onChangeText={setChassis}
      />

      <SearchButton onPress={handleSearch}>
        <ButtonText>Pesquisar</ButtonText>
      </SearchButton>
    </ContentWrapper>
  );
};

export default SearchForm;
