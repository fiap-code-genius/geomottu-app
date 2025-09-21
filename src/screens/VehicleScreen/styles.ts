import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 24px 0;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: 20px;
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
  margin-bottom: 40px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 4px;
`;

export const SectionValue = styled.Text<{ status?: string }>`
  color: ${({ status, theme }) =>
    status === 'irregular' ? 'red' : status === 'regular' ? 'white' : theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 24px;
`;
