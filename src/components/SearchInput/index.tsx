import React from 'react';
import { TextInputProps } from 'react-native';
import { Input, Container, Icon } from './styles';

interface SearchInputProps extends TextInputProps {
}

export default function SearchInput({ ...props }: (SearchInputProps)) {

  return (
    <Container >
      <Input {...props} />
      <Icon />
    </Container>
  )
}