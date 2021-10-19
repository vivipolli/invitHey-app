import React from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import { Restart } from 'fiction-expo-restart';
import Parse from 'parse/react-native';

import GlobalApp from '../../components/GlobalApp';
import TextInput from '../../components/TextInput';

import Logo from '../../assets/images/InvitHey.svg';
import GoogleSvg from '../../assets/icons/google.svg';
import FacebookSvg from '../../assets/icons/facebook.svg';

import {
  Container,
  Text,
  Form,
  Group,
  SocialGroup,
  BoldSpan,
  BorderSpan,
  ButtonRegister,
  ButtonReboot
} from './styles';

import PrimaryBtn from '../../components/PrimaryBtn';
import SocialButton from '../../components/SocialButton';
import LinkButton from '../../components/LinkButton';
import { Alert, View } from 'react-native';


interface User {
  email: string,
  password: string,
}

export default function SignIn() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async function (data: User) {
    const { email, password } = data;
    try {
      const user: Parse.User = await Parse.User.logIn(email, password);
      Restart();
    } catch (error: any) {
      Alert.alert('Error!', error.message);
    }
  };

  return (
    <GlobalApp>
      <Container>
        <Logo />
        <Form>
          <Controller
            control={control}
            rules={{ required: true }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="E-mail"
                placeholder="Digite aqui seu email"
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
                placeholder="Digite aqui sua senha"
                onBlur={onBlur}
                secureTextEntry
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.password?.type === 'required'}
              />
            )}
          />
          <ButtonReboot>
            <LinkButton isDefault={false}>
              Esqueceu sua senha?
            </LinkButton>
          </ButtonReboot>

          <Group>
            <PrimaryBtn
              onPress={handleSubmit(onSubmit)}
              isDefault
            >
              Entrar
            </PrimaryBtn>
          </Group>
        </Form>
        <View>
          <Group>
            <BorderSpan />
            <BoldSpan>ou</BoldSpan>
            <BorderSpan />
          </Group>
          <SocialGroup>
            <SocialButton
              onPress={handleSubmit(onSubmit)}
              isDefault={false}
              icon={<GoogleSvg />}
            />
            <SocialButton
              onPress={handleSubmit(onSubmit)}
              isDefault={false}
              icon={<FacebookSvg />}
            />
          </SocialGroup>
          <ButtonRegister>
            <Text>Não tem conta?</Text>
            <LinkButton
              isDefault={false}
              onPress={() => navigation.navigate('SignUp')}
            >
              Criar uma conta agora
            </LinkButton>
          </ButtonRegister>
        </View>
      </Container>
    </GlobalApp>
  );
}