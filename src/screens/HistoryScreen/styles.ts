import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xxl}px ${({ theme }) => theme.spacing.lg}px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const HistoryItemContainer = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const HistoryText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
