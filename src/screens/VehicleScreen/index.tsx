import React from 'react';
import { Container } from './styles';
import BackButton from './components/BackButton';
import VehicleDetails from './components/VehicleDetails';
import VehicleNotFound from './components/vehicleNotFound';
import { useVehicle } from './hooks/useVehicle';

const VehicleScreen = () => {
  const { vehicle, handleBack } = useVehicle();

  return (
    <Container>
      <BackButton onPress={handleBack} />
      {!vehicle ? <VehicleNotFound /> : <VehicleDetails vehicle={vehicle} />}
    </Container>
  );
};

export default VehicleScreen;
