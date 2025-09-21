import React from 'react';
import { Container, Overlay, BottomSheet, DragIndicator } from './styles';
import { useLocation } from './hooks/useLocation';
import VehicleNotFound from './components/vehicleNotFound';
import VehicleDetails from './components/veihicleDetails';

const LocationScreen = () => {
  const { vehicle, vehicleId, handleDetails, handleNewSearch } = useLocation();

  if (!vehicleId) return null;

  return (
    <Container>
      <Overlay />
      <BottomSheet>
        <DragIndicator />
        {!vehicle ? (
          <VehicleNotFound onNewSearch={handleNewSearch} />
        ) : (
          <VehicleDetails
            vehicle={vehicle}
            onDetails={handleDetails}
            onNewSearch={handleNewSearch}
          />
        )}
      </BottomSheet>
    </Container>
  );
};

export default LocationScreen;
