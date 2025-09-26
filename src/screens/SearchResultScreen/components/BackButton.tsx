import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BackButtonContainer } from '../styles';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  onPress?: () => void;  
}

const BackButton = ({ onPress }: Props) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <BackButtonContainer onPress={onPress || (() => navigation.goBack())}>
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color={theme.colors.text}
      />
    </BackButtonContainer>
  );
};

export default BackButton;
