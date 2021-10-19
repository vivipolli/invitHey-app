import React, { ReactNode } from 'react';
import { Container } from './style';

interface GlobalAppProps {
  children: ReactNode
}

export default function GlobalComponent({ children }: GlobalAppProps) {

  return (
    <Container>
      {children}
    </Container>
  )
}