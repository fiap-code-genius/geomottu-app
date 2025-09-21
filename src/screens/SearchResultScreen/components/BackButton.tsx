import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BackButtonContainer } from '../styles';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <BackButtonContainer onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-outline" size={24} color="#fff" />
    </BackButtonContainer>
  );
};

export default BackButton;
