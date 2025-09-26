import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5); // overlay fixo é ok aqui
`;

export const Overlay = styled.View`
  flex: 1;
`;

export const BottomSheet = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.xxl || 32}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.xxl || 32}px;
  align-items: center;
`;

export const DragIndicator = styled.View`
  width: 40px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const VehicleId = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  text-align: center;
`;

export const GreenButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const GrayButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
