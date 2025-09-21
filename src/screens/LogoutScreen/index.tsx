import React from 'react';
import { Container } from './styles';
import { useLogout } from './hooks/useLogout';
import LoadingIndicator from './components/LoadingIndicator';

const LogoutScreen = () => {
  useLogout();

  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
};

export default LogoutScreen;
