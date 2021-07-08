import React, { ReactNode, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';
import TextInput from '../../components/TextInput';

import LogoType from '../../assets/images/logoType_small.svg';
import TextButton from '../../components/TextButton';
import { Container, Form, Group, Row, Title } from './styles';

export default function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    console.info(data)
  }


  return (
    <GlobalApp>
      <Container>
        <LogoType />
        <Title>Registrar-se</Title>
        <Form>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Nome"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.name?.type === 'required'}
              />
            )}
          />
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
          <Row>
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
                  width='48%'
                />
              )}
            />
            <Controller
              control={control}
              rules={{ required: true }}
              name="confirmPwd"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Repita a senha"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  error={errors.confirmPwd?.type === 'required'}
                  width='48%'
                />
              )}
            />
          </Row>
          <Controller
            control={control}
            rules={{ required: true }}
            name="cellPhone"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Celular"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.cellPhone?.type === 'required'}
              />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="birthDate"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Data de nasc."
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.birthDate?.type === 'required'}
              />
            )}
          />
          <Group marginTop={20}>
            <PrimaryBtn
              onPress={handleSubmit(onSubmit)}
              isDefault >
              Criar conta
            </PrimaryBtn>
            <TextButton
              onPress={() => { }}
              textToInfo="Já tem uma conta?"
              textToPress="Entrar" />
          </Group>
        </Form>
      </Container>
    </GlobalApp>
  )
}