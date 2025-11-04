import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Container,
  TopBar,
  Title,
  LogoutButton,
  LogoutText,
  Subtitle,
  SearchInput,
  Content,
  FooterBar,
  AddButton,
  AddText,
  ModalContainer,
  ModalCard,
  ModalTitle,
  FieldLabel,
  ModalInput,
  ModalButton,
  ModalButtonSecondary,
  ModalButtonText,
  ModalSwitchRow,
  ModalSwitchLabel,
  ThemeRow,
  ThemeLabel,
} from './styles';
import { useAdmin } from './hooks/useAdmin';
import { VehicleItem } from './components/VehicleItem';
import { useAuth } from '../../context/AuthContext';
import { Vehicle } from '../../types/vehicle';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useThemeApp } from '../../context/ThemeContext';

const AdminScreen = () => {
  const { getAllVehicles, addVehicle, deleteVehicle, updateVehicle, moveVehicle } = useAdmin();
  const { logout } = useAuth();
  const allVehicles = getAllVehicles();
  const insets = useSafeAreaInsets();

  const { isDark, toggleTheme } = useThemeApp();
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPlate, setNewPlate] = useState('');
  const [newStatus, setNewStatus] = useState<'regular' | 'irregular'>('regular');
  const [newNeedsMaintenance, setNewNeedsMaintenance] = useState(false);

  const [editingVehicle, setEditingVehicle] = useState<Vehicle & { username: string } | null>(null);
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<'regular' | 'irregular'>('regular');
  const [needsMaintenance, setNeedsMaintenance] = useState(false);

  const filtered = allVehicles.filter((v) => {
    const t = searchQuery.toLowerCase();
    return v.plate.toLowerCase().includes(t) || v.username.toLowerCase().includes(t);
  });

  const handleAddVehicle = () => {
    if (!newUsername || !newPlate) return;
    addVehicle(newUsername, {
      plate: newPlate,
      status: newStatus,
      needsMaintenance: newNeedsMaintenance,
      chassis: ''
    });
    setNewUsername('');
    setNewPlate('');
    setNewStatus('regular');
    setNewNeedsMaintenance(false);
    setAddModalVisible(false);
  };

  const handleEdit = (vehicle: Vehicle & { username: string }) => {
    setEditingVehicle(vehicle);
    setUsername(vehicle.username);
    setStatus(vehicle.status);
    setNeedsMaintenance(vehicle.needsMaintenance);
  };

  const handleSaveEdit = () => {
    if (!editingVehicle) return;
    if (username !== editingVehicle.username) {
      moveVehicle(editingVehicle.username, username, editingVehicle.chassis, {
        status,
        needsMaintenance,
      });
    } else {
      updateVehicle(editingVehicle.username, editingVehicle.chassis, {
        status,
        needsMaintenance,
      });
    }
    setEditingVehicle(null);
  };

  const modeLabel = isDark ? 'Modo Claro' : 'Modo Escuro';

  return (
    <Container $isDark={isDark}>
      <TopBar>
        <Title>Painel do Administrador</Title>
        <LogoutButton onPress={logout}>
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
      </TopBar>

      <ThemeRow>
        <ThemeLabel>{modeLabel}</ThemeLabel>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: theme.colors.muted, true: theme.colors.primary }}
          thumbColor={isDark ? theme.colors.highlight : theme.colors.buttonText}
        />
      </ThemeRow>

      <Subtitle>Gerencie as motos das filiais</Subtitle>

      <SearchInput
        placeholder="Buscar moto por placa ou filial..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Content>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.chassis}
          renderItem={({ item }) => (
            <VehicleItem vehicle={item} onEdit={handleEdit} onDelete={deleteVehicle} />
          )}
          ListEmptyComponent={<Subtitle>Nenhuma moto encontrada</Subtitle>}
          contentContainerStyle={{ paddingVertical: 16, paddingBottom: 120 }}
        />
      </Content>

      <FooterBar $isDark={isDark} style={{ paddingBottom: 12 + insets.bottom }}>
        <AddButton onPress={() => setAddModalVisible(true)}>
          <AddText>Adicionar Moto</AddText>
        </AddButton>
      </FooterBar>

      <Modal visible={isAddModalVisible} transparent animationType="fade">
        <ModalContainer>
          <ModalCard>
            <ModalTitle>Adicionar Moto</ModalTitle>

            <FieldLabel>Filial (username)</FieldLabel>
            <ModalInput
              placeholder="Ex.: mbut"
              placeholderTextColor="#aaaaaa"
              value={newUsername}
              onChangeText={setNewUsername}
            />

            <FieldLabel>Placa</FieldLabel>
            <ModalInput
              placeholder="Ex.: MB100"
              placeholderTextColor="#aaaaaa"
              value={newPlate}
              onChangeText={setNewPlate}
            />

            <ModalSwitchRow>
              <ModalSwitchLabel>Status</ModalSwitchLabel>
              <ModalButton onPress={() => setNewStatus(newStatus === 'regular' ? 'irregular' : 'regular')}>
                <ModalButtonText>{newStatus === 'regular' ? 'Regular' : 'Irregular'}</ModalButtonText>
              </ModalButton>
            </ModalSwitchRow>

            <ModalSwitchRow>
              <ModalSwitchLabel>Precisa de manutenção</ModalSwitchLabel>
              <ModalButton onPress={() => setNewNeedsMaintenance(!newNeedsMaintenance)}>
                <ModalButtonText>{newNeedsMaintenance ? 'Sim' : 'Não'}</ModalButtonText>
              </ModalButton>
            </ModalSwitchRow>

            <ModalButton onPress={handleAddVehicle}>
              <ModalButtonText>Salvar</ModalButtonText>
            </ModalButton>
            <ModalButtonSecondary onPress={() => setAddModalVisible(false)}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButtonSecondary>
          </ModalCard>
        </ModalContainer>
      </Modal>

      <Modal visible={!!editingVehicle} transparent animationType="fade">
        <ModalContainer>
          <ModalCard>
            <ModalTitle>Editar Moto</ModalTitle>

            <FieldLabel>Filial (username)</FieldLabel>
            <ModalInput
              value={username}
              onChangeText={setUsername}
              placeholder="Ex.: mbut"
              placeholderTextColor="#aaaaaa"
            />

            <FieldLabel>Placa</FieldLabel>
            <ModalInput value={editingVehicle?.plate} editable={false} />

            <ModalSwitchRow>
              <ModalSwitchLabel>Status</ModalSwitchLabel>
              <ModalButton onPress={() => setStatus(status === 'regular' ? 'irregular' : 'regular')}>
                <ModalButtonText>{status === 'regular' ? 'Regular' : 'Irregular'}</ModalButtonText>
              </ModalButton>
            </ModalSwitchRow>

            <ModalSwitchRow>
              <ModalSwitchLabel>Precisa de manutenção</ModalSwitchLabel>
              <ModalButton onPress={() => setNeedsMaintenance(!needsMaintenance)}>
                <ModalButtonText>{needsMaintenance ? 'Sim' : 'Não'}</ModalButtonText>
              </ModalButton>
            </ModalSwitchRow>

            <ModalButton onPress={handleSaveEdit}>
              <ModalButtonText>Salvar</ModalButtonText>
            </ModalButton>
            <ModalButtonSecondary onPress={() => setEditingVehicle(null)}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButtonSecondary>
          </ModalCard>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AdminScreen;
