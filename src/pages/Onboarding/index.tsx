import React from 'react';
import GlobalApp from '../../components/GlobalApp';
import { Container, Group, BoldSpan, Text } from './styles';
import Logo from '../../assets/images/woman.svg';

export default function Onboarding() {
  return(   
    <GlobalApp>
      <Container>
        <Group>
          <Logo />
        </Group>
        <BoldSpan>Lorem Ipsum</BoldSpan>
        <Text>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer facilisis libero nec
          vulputate pulvinar. Phasellus purus neque.
        </Text>
      </Container>
    </GlobalApp>
  );
}