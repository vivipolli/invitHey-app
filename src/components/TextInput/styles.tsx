import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from '../../../styled-components';

interface InputProps {
  error?: boolean,
}

export const Container = styled.View`
  margin-bottom: 10px;
`

export const MaskedInput = styled(TextInputMask)<InputProps>`
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${props => props.error ? props.theme.colors.red : props.theme.colors.lineGray};
  padding-left: 15px;
`

export const Input = styled(TextInput)<InputProps>`
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border-bottom: 1px;
  border-color: ${props => props.error ? props.theme.colors.red : props.theme.colors.textGray};
  padding-left: 15px;
`

export const Label = styled.Text<InputProps>`
  ${(props) => {
    return `
      font-family: ${props.theme.typography.regular};
      color: ${props.error ? props.theme.colors.red : props.theme.colors.softGray};
      font-size: ${props.theme.typography.smallFont};
      margin-bottom: 8px;
    `
  }}
`

export const WhiteInput = styled(TextInput)<InputProps>`
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${props => props.error ? props.theme.colors.red : props.theme.colors.white};
  padding-left: 15px;
  background-color: ${props => props.theme.colors.white};
`

export const WhiteLabel = styled.Text<InputProps>`
  ${(props) => {
    return `
      font-family: ${props.theme.typography.regular};
      color: ${props.error ? props.theme.colors.red : props.theme.colors.white};
      font-size: ${props.theme.typography.smallFont};
      margin-bottom: 8px;
    `
  }}
`

