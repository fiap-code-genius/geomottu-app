import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px 20px 20px;
  justify-content: flex-start;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 10;
  padding: 5px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-top: 80px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: auto;
  padding-bottom: 40px;
`;

export const FooterText = styled.Text`
  color: #ccc;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

export const DownloadButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const DownloadButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
`;
