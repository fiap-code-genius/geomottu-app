import React from 'react';
import { Container, Content } from './styles';
import BackButton from './components/BackButton';
import ResultFound from './components/ResultFound';
import ResultNotFound from './components/ResultNotFound';
import { useSearchResult } from './hooks/useSearchResult';

const SearchResultScreen = () => {
  const { vehicle, vehicleId, handleBackToSearch } = useSearchResult();

  return (
    <Container>
      <BackButton />
      <Content>
        {!vehicle ? (
          <ResultNotFound vehicleId={vehicleId} />
        ) : (
          <ResultFound vehicle={vehicle} onBackToSearch={handleBackToSearch} />
        )}
      </Content>
    </Container>
  );
};

export default SearchResultScreen;
