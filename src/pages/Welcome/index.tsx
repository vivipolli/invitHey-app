import React, { ReactNode } from 'react';

import { TouchableOpacity } from 'react-native';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';

import { LinkText, Text, Container, Actions } from './styles';
import Logo from '../../assets/images/InvitHey.svg';

export default function Welcome() {

  return (
    <GlobalApp>
      <Container>
        <Logo />
        <Text>Olá! Seja bem vindo(a) ao InviteHey!
          Aqui você escontra todo tipo de evento
          que desejar.
        </Text>
        <Actions>
          <PrimaryBtn isDefault>Sou novo(a)</PrimaryBtn>
          <TouchableOpacity>
            <LinkText>Já tenho uma conta</LinkText>
          </TouchableOpacity>
        </Actions>
      </Container>
    </GlobalApp>
  )
}