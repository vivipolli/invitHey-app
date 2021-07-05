import React, { ReactNode } from 'react';

import { useRoute } from '@react-navigation/native';

import { ThemeProvider } from '../../../styled-components';
import { theme } from '../../../theme';
import { Container } from './style';

interface GlobalAppProps {
  children: ReactNode
}

export default function GlobalComponent({ children }: GlobalAppProps) {
  const route = useRoute();
  // const routeWithoutNav = route.name === 'Welcome'

  return (
    <Container primaryBg={false}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Container>
  )
}