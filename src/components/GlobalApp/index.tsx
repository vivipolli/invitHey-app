import React, { ReactNode } from 'react';

import { Header } from '../Header';
import { Container } from './style';

interface GlobalAppProps {
  children: ReactNode;
  route: any;
}


export default function GlobalComponent({ children, route }: GlobalAppProps) {

  function getHeaderTitle() {
    const routes: any = {
      CreateEvent: "Criar",
      CreateGiftList: "Sugestões de presentes",
      CreateGuest: "Convidar amigos",
      Profile: "Meu perfil",
      Event: "Evento",
      Favorites: "Interesses"
    }

    return routes[route];
  }

  return (
    <Container>
      <Header page={getHeaderTitle()} />
      {children}
    </Container>
  )
}