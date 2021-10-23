import React from 'react';

import { useNavigation } from '@react-navigation/core';

import {
  Container,
  Page,
  ArrowIcon,
  Back
} from './styles';

interface Props {
  page: string;
  backPage?: any;
}

export function Header({ page, backPage }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      <Back onPress={() => navigation.goBack(null)}>
        <ArrowIcon name='arrow-left' />
      </Back>
      <Page>{page}</Page>
    </Container>
  );
}