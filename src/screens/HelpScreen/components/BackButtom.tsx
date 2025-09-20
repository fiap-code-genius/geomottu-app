import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BackButtonContainer } from '../styles';

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => (
  <BackButtonContainer onPress={onPress}>
    <Ionicons name="chevron-back-outline" size={24} color="#fff" />
  </BackButtonContainer>
);

export default BackButton;
