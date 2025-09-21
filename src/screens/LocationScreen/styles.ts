import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Overlay = styled.View`
  flex: 1;
`;

export const BottomSheet = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  align-items: center;
`;

export const DragIndicator = styled.View`
  width: 40px;
  height: 4px;
  background-color: #666;
  border-radius: 2px;
  margin-bottom: 16px;
`;

export const VehicleId = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
  margin-bottom: 24px;
  text-align: center;
`;

export const GreenButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 24px;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  align-items: center;
`;

export const GrayButton = styled.TouchableOpacity`
  background-color: #222;
  margin-bottom: 10px;
  padding: 10px 24px;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
