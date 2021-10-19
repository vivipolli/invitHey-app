
import React from 'react';
import { TextInputProps, Text } from 'react-native';
import { Input, Label, Container, MaskedInput } from './styles';

interface InputProps extends TextInputProps {
  label: string,
  error?: boolean,
  width?: string,
  type?: string,
  mask?: string,
  errorMsg?: string,
}

export default function TextInput({
  label,
  width,
  type,
  errorMsg,
  error,
  mask,
  ...props }: (InputProps)) {
  const maskTypes = {
    cpf: 'cpf',
    cnpj: 'cnpj',
    money: 'money',
    date: 'datetime',
    card: 'credit-card',
    custom: 'custom',
  };

  const masked = (type: string) => maskTypes[type];


  return (
    <Container style={{ width }}>
      <Label error={error}>{label}</Label>
      {type ?
        <MaskedInput
          type={type ? masked(type) : 'custom'}
          error={error}
          options={{ mask }}
          {...props}
        />
        :
        <Input error={error} {...props} />
      }
      <Text>{errorMsg}</Text>
    </Container >
  )
}