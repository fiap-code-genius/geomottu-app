import React from 'react';
import styled from 'styled-components/native';
import { Vehicle } from '../../../types/vehicle';

const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const CardText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: ${({ theme }) => theme.fontFamily};
  margin-top: 2px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const Btn = styled.TouchableOpacity<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
`;

const BtnText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

type Props = {
  vehicle: Vehicle & { username?: string; branchName?: string };
  onEdit?: (vehicle: Vehicle & { username?: string }) => void;
  onDelete?: (username: string, chassis: string) => void;
};

export const VehicleItem: React.FC<Props> = ({ vehicle, onEdit, onDelete }) => (
  <Card>
    <CardTitle>{vehicle.plate}</CardTitle>
    {vehicle.branchName && <CardText>Filial: {vehicle.branchName}</CardText>}
    <CardText>Status: {vehicle.status}</CardText>
    <CardText>Manutenção: {vehicle.needsMaintenance ? 'Sim' : 'Não'}</CardText>

    <Actions>
      <Btn bg="#4CAF50" onPress={() => onEdit?.(vehicle)}>
        <BtnText>Editar</BtnText>
      </Btn>
      <Btn bg="#F44336" onPress={() => onDelete?.(vehicle.username ?? '', vehicle.chassis)}>
        <BtnText>Remover</BtnText>
      </Btn>
    </Actions>
  </Card>
);
