import React, { ReactNode, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';
import TextInput from '../../components/TextInput';

import { LinkText, Text, Container, Group } from './styles';
import LogoType from '../../assets/images/InvitHey.svg';
import TextButton from '../../components/TextButton';

export default function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    console.info(data)
  }


  return (
    <GlobalApp>
      <Container>
        <Group>
          <LogoType />
        </Group>
        <Controller
          control={control}
          rules={{ required: true }}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              error={errors.email?.type === 'required'}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Senha"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              error={errors.password?.type === 'required'}
            />
          )}
        />
        <Group>
          <PrimaryBtn
            onPress={handleSubmit(onSubmit)}
            isDefault >
            Entrar
          </PrimaryBtn>
          <TextButton
            onPress={() => { }}
            textToInfo="Não é registrado?"
            textToPress="Registrar-se" />
        </Group>
      </Container>
    </GlobalApp>
  )
}