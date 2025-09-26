import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BackButtonContainer } from '../styles';
import { useTheme } from 'styled-components/native'; 

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => {
  const theme = useTheme(); 

  return (
    <BackButtonContainer onPress={onPress}>
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color={theme.colors.text} 
      />
    </BackButtonContainer>
  );
};

export default BackButton;
