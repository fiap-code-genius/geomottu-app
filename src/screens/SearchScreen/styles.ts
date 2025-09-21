import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #666;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 24px 100px;
  align-items: center;
`;

export const YellowDot = styled.View`
  width: 40px;
  height: 40px;
  background-color: #FFD600;
  border-radius: 20px;
  position: absolute;
  top: -20px;
`;

export const InstructionText = styled.Text`
  color: #fff;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Input = styled.TextInput`
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin-top: 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const HelpText = styled.Text`
  color: #aaa;
  margin-top: 16px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
