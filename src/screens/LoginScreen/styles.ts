import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Subtitle = styled.Text`
  color: #ccc;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #222;
  border-radius: 8px;
  padding: 0 16px;
  color: #fff;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
`;

export const HelpButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const HelpText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
