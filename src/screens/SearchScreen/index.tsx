import React from 'react';
import { Container, Content, YellowDot } from './styles';
import SearchForm from './components/SearchForm';
import MockMap from './MockMap';

const SearchScreen = () => {
  return (
    <Container>
      <MockMap />
      <Content>
        <YellowDot />
        <SearchForm />
      </Content>
    </Container>
  );
};

export default SearchScreen;
