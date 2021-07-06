
import React from 'react';
import { TextInputProps } from 'react-native';
import { Input, Label, Container, MaskedInput } from './styles';

interface InputProps extends TextInputProps {
  label: string,
  error?: boolean,
  width?: string,
  type?: string,
}

export default function TextInput({ label, width, type, error, ...props }: (InputProps)) {
  const maskTypes = {
    cpf: 'cpf',
    cnpj: 'cnpj',
    date: 'datetime',
  };

  const masked = (type: string) => maskTypes[type];

  return (
    <Container style={{ width }}>
      <Label error={error}>{label}</Label>
      {type ?
        <MaskedInput type={type ? masked(type) : 'custom'} error={error} {...props} />
        :
        <Input error={error} {...props} />
      }
    </Container>
  )
}