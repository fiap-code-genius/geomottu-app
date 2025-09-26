import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xxl}px ${({ theme }) => theme.spacing.lg}px 0;
`;

export const Circle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.highlight};
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing.xxl}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
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

export const SectionValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;
