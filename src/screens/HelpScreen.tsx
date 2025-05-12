import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = () => {
  const navigation = useNavigation();

  const handleDownload = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=br.com.mottu'); 
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#fff" />
      </BackButton>

      <InfoText>
        Este aplicativo é destinado aos funcionários das lojas Mottu. As informações para login se encontram com o gestor do pátio.
      </InfoText>

      <Footer>
        <FooterText>Se você deseja alugar</FooterText>
        <DownloadButton onPress={handleDownload}>
          <DownloadButtonText>Baixar APP Mottu</DownloadButtonText>
        </DownloadButton>
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px 20px 20px;
  justify-content: flex-start;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 10;
`;

const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-top: 80px;
`;

const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: auto;
  padding-bottom: 40px;
`;

const FooterText = styled.Text`
  color: #ccc;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

const DownloadButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const DownloadButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
`;

export default HelpScreen;
