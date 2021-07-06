import React, { ReactNode } from 'react';

import { TouchableOpacity, View } from 'react-native';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';

import { LinkText, Text, Container, Group } from './styles';
import LogoType from '../../assets/images/InvitHey.svg';
import Logo from '../../assets/images/logo_baloon.svg';

export default function Welcome() {

  return (
    <GlobalApp>
      <Container>
        <Group>
          <Logo />
          <LogoType />
        </Group>
        <Text>Olá! Seja bem vindo(a) ao InvitHey! Aqui você cria qualquer evento,
              participa e convida seus amigos.
        </Text>
        <Group>
          <PrimaryBtn isDefault>Sou novo(a)</PrimaryBtn>
          <TouchableOpacity>
            <LinkText>Já tenho uma conta</LinkText>
          </TouchableOpacity>
        </Group>
      </Container>
    </GlobalApp>
  )
}