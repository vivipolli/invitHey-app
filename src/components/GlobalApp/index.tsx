import React, { ReactNode } from 'react';

import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ThemeProvider } from '../../../styled-components';
import { theme } from '../../../theme';
import { Container } from './style';
import { TouchableOpacity } from 'react-native';

interface GlobalAppProps {
  children: ReactNode
}

export default function GlobalComponent({ children }: GlobalAppProps) {
  const route = useRoute();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack()
  };

  return (
    <Container primaryBg={false}>
      <ThemeProvider theme={theme}>
        {route.name !== 'Welcome' &&
          <TouchableOpacity onPress={handleBack} >
            <Ionicons name="chevron-back" size={26} color="#5A5A5A" />
          </TouchableOpacity>
        }
        {children}
      </ThemeProvider>
    </Container>
  )
}