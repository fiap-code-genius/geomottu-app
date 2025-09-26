import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl}px ${({ theme }) => theme.spacing.lg}px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
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
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
`;

export const HelpButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl}px;
  right: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  justify-content: center;
  align-items: center;
`;

export const HelpText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
