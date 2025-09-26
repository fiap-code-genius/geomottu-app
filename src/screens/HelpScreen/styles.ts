import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xxl}px ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.md}px;
  justify-content: flex-start;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxl}px;
  left: ${({ theme }) => theme.spacing.md}px;
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.xs}px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-top: 80px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: auto;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

export const DownloadButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const DownloadButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
`;
