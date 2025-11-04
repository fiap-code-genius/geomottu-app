import React, { useState } from 'react';
import styled from 'styled-components/native';

const FormContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.muted};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const ToggleButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  min-width: 110px;
  align-items: center;
`;

const ToggleText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Submit = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const SubmitText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;

type Props = {
  onAdd: (
    username: string,
    plate: string,
    status: 'regular' | 'irregular',
    needsMaintenance: boolean
  ) => void;
};

export const VehicleForm: React.FC<Props> = ({ onAdd }) => {
  const [username, setUsername] = useState('');
  const [plate, setPlate] = useState('');
  const [status, setStatus] = useState<'regular' | 'irregular'>('regular');
  const [needsMaintenance, setNeedsMaintenance] = useState(false);

  return (
    <FormContainer>
      <Label>Filial (username)</Label>
      <Input
        placeholder="Ex.: mbut"
        placeholderTextColor="#aaaaaa"
        value={username}
        onChangeText={setUsername}
      />

      <Label>Placa</Label>
      <Input
        placeholder="Ex.: MB100"
        placeholderTextColor="#aaaaaa"
        value={plate}
        onChangeText={setPlate}
      />

      <Row>
        <Label>Status</Label>
        <ToggleButton onPress={() => setStatus(status === 'regular' ? 'irregular' : 'regular')}>
          <ToggleText>{status === 'regular' ? 'Regular' : 'Irregular'}</ToggleText>
        </ToggleButton>
      </Row>

      <Row>
        <Label>Precisa de manutenção</Label>
        <ToggleButton onPress={() => setNeedsMaintenance(!needsMaintenance)}>
          <ToggleText>{needsMaintenance ? 'Sim' : 'Não'}</ToggleText>
        </ToggleButton>
      </Row>

      <Submit
        onPress={() => username && plate && onAdd(username, plate, status, needsMaintenance)}
      >
        <SubmitText>Adicionar Moto</SubmitText>
      </Submit>
    </FormContainer>
  );
};
