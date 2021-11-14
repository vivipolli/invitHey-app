import React from 'react';

import { StatusBar } from 'react-native';

import Logo from '../../../assets/images/logoType_small.svg';

import {
  Container
} from './styles';

export function HeaderHome() {
  return (
    <Container>
      <StatusBar backgroundColor={'#FF7527'} />
      <Logo width={150} height={50} />
    </Container>
  );
}