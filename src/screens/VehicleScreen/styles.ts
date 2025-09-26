import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xxl}px ${({ theme }) => theme.spacing.lg}px 0;
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
}))`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg}px;
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
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const SectionValue = styled.Text<{ status?: string }>`
  color: ${({ status, theme }) =>
    status === 'irregular'
      ? theme.colors.error
      : status === 'regular'
      ? theme.colors.primary
      : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;
