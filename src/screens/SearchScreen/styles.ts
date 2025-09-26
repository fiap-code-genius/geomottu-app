import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.xxl}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.xxl}px;
  padding: ${({ theme }) => theme.spacing.xl}px ${({ theme }) => theme.spacing.lg}px 100px;
  align-items: center;
`;

export const YellowDot = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.highlight};
  border-radius: 20px;
  position: absolute;
  top: -20px;
`;

export const InstructionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  height: 40px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm}px;
  width: 100%;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const HelpText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
