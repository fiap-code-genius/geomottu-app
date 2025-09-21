import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InfoText } from './styles';
import BackButton from './components/BackButton';
import FooterSection from './components/FooterSection';

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />

      <InfoText>
        Este aplicativo é destinado aos funcionários das lojas Mottu. 
        As informações para login se encontram com o gestor do pátio.
      </InfoText>

      <FooterSection />
    </Container>
  );
};

export default HelpScreen;
