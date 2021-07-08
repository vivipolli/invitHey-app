import React, { ReactNode, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';
import TextInput from '../../components/TextInput';

import LogoType from '../../assets/images/InvitHey.svg';
import TextButton from '../../components/TextButton';
import { Container, Form, Group, Span } from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    console.info(data)
  }


  return (
    <GlobalApp>
      <Container>
        <LogoType />
        <Form>
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
          <Group marginTop={20}>
            <PrimaryBtn
              onPress={handleSubmit(onSubmit)}
              isDefault >
              Entrar
            </PrimaryBtn>
            <TouchableOpacity activeOpacity={0.8}>
              <Span>Esqueci minha senha</Span>
            </TouchableOpacity>
          </Group>
        </Form>

        {/* <Group>
          <PrimaryBtn
            onPress={handleSubmit(onSubmit)}
            isDefault={false} >
            Google
          </PrimaryBtn>

          <PrimaryBtn
            onPress={handleSubmit(onSubmit)}
            isDefault={false} >
            Facebook
          </PrimaryBtn>
        </Group> */}

        <TextButton
          onPress={() => navigation.navigate('SignUp')}
          textToInfo="Não é registrado?"
          textToPress="Registrar-se" />
      </Container>
    </GlobalApp>
  )
}