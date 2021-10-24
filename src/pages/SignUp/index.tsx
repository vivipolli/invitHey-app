import React from 'react';
import { Alert } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Restart } from 'fiction-expo-restart';
import Parse from 'parse/react-native';

import GlobalApp from '../../components/GlobalApp';
import PrimaryBtn from '../../components/PrimaryBtn';
import TextInput from '../../components/TextInput';

import TextButton from '../../components/TextButton';
import { Container, Form, Group, Row, Title } from './styles';

interface User {
  email: string,
  name: string,
  username: string,
  password: string,
}

export default function SignUp() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async function (data: User): Promise<boolean> {
    const { email, name, password, username } = data;
    const user: Parse.User = new Parse.User();
    user.set('username', username); //verify if username already exists
    user.set('fullname', name);
    user.set('email', email);
    user.set('password', password);

    try {
      let userResult: Parse.User = await user.signUp();
      Restart();
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      console.info(error);
      return false;
    }
  };


  return (
    <GlobalApp>
      <Container>
        <Form>
          <Title>Registrar-se</Title>
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
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Nome de usuário (username)"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.username?.type === 'required'}
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
                  secureTextEntry
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
                  secureTextEntry
                  onChangeText={value => onChange(value)}
                  value={value}
                  error={errors.confirmPwd?.type === 'required'}
                  width='48%'
                />
              )}
            />
          </Row>
          {/* <Controller
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
          /> */}
          <Group marginTop={20}>
            <PrimaryBtn
              onPress={handleSubmit(onSubmit)}
              isDefault >
              Criar conta
            </PrimaryBtn>
          </Group>
        </Form>
        <TextButton
          onPress={() => { }}
          textToInfo="Já tem uma conta?"
          textToPress="Entrar" />
      </Container>
    </GlobalApp>
  )
}