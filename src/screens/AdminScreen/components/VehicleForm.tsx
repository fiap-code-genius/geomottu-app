import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Row = styled.View`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  height: 40px;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

type Props = {
  onAdd: (username: string, payload: { plate: string; status: 'regular' | 'irregular'; needsMaintenance: boolean; chassis?: string }) => void;
};

export const VehicleForm: React.FC<Props> = ({ onAdd }) => {
  const [branch, setBranch] = useState('');
  const [plate, setPlate] = useState('');
  const [status, setStatus] = useState<'regular' | 'irregular'>('regular');
  const [needsMaintenance, setNeedsMaintenance] = useState(false);

  const handleAdd = () => {
    if (!branch.trim() || !plate.trim()) return;
    onAdd(branch.trim().toLowerCase(), {
      plate: plate.trim().toUpperCase(),
      status,
      needsMaintenance,
    });
    setPlate('');
  };

  return (
    <View>
      <Row><Input placeholder="Filial (mbut/mpin)" value={branch} onChangeText={setBranch} /></Row>
      <Row><Input placeholder="Placa" value={plate} onChangeText={setPlate} /></Row>
      <Button onPress={handleAdd}><ButtonText>Adicionar moto</ButtonText></Button>
    </View>
  );
};
