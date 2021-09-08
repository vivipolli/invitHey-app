import React from 'react';
import { TextInputProps } from 'react-native';
import { Input, Container, Icon } from './styles';

interface ResearchInputProps extends TextInputProps {
  error?: boolean,
  width?: string,
  type?: string,
}

export default function ResearchInput({ width, type, error, ...props }: (ResearchInputProps)) {

  return (
    <Container >
      <Input error={error} {...props} />
      <Icon />
    </Container>
  )
}