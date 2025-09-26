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

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const IDContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const VehicleID = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  font-weight: bold;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const SearchText = styled.Text`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.buttonText};
`;
