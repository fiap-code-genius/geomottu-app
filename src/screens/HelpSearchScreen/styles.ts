import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
  align-items: center;
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

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #222;
  border-radius: 8px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
