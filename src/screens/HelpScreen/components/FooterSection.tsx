import React from 'react';
import { handleDownload } from '../services/help.service';
import { Footer, FooterText, DownloadButton, DownloadButtonText } from '../styles';

const FooterSection = () => (
  <Footer>
    <FooterText>Se você deseja alugar</FooterText>
    <DownloadButton onPress={handleDownload}>
      <DownloadButtonText>Baixar APP Mottu</DownloadButtonText>
    </DownloadButton>
  </Footer>
);

export default FooterSection;
