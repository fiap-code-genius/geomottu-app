import React from 'react';
import { Container, Content, YellowDot } from './styles';
import SearchForm from './components/SearchForm';

const SearchScreen = () => {
  return (
    <Container>
      <Content>
        <YellowDot />
        <SearchForm />
      </Content>
    </Container>
  );
};

export default SearchScreen;
