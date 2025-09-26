import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xxl}px ${({ theme }) => theme.spacing.lg}px 0;
  align-items: center;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxl}px;
  left: ${({ theme }) => theme.spacing.lg}px;
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.xs}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;
