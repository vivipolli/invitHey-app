import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import GlobalApp from '../../components/GlobalApp';
import TextInput from '../../components/TextInput';

import Logo from '../../assets/images/InvitHey.svg';
import GoogleSvg from '../../assets/icons/google.svg';
import FacebookSvg from '../../assets/icons/facebook.svg';
import AppleSvg from '../../assets/icons/apple.svg';
import TwitterSvg from '../../assets/icons/twitter.svg';

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

export default function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    console.info(data)
  }

  return(
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
                label="Login"
                placeholder="Digite aqui seu login"
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
              icon={<AppleSvg />}
            />
            <SocialButton
              onPress={handleSubmit(onSubmit)}
              isDefault={false}
              icon={<FacebookSvg />}
            />
            <SocialButton
              onPress={handleSubmit(onSubmit)}
              isDefault={false}
              icon={<TwitterSvg />}
            />
          </SocialGroup>
          <ButtonRegister>
            <Text>Não tem conta?</Text>
            <LinkButton 
              isDefault={false}
              onPress={handleSubmit(onSubmit)}
            >
              Criar uma conta agora
            </LinkButton>
          </ButtonRegister>
        </Form>
      </Container>
    </GlobalApp>
  );
}