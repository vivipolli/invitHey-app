import styled from '../../../styled-components';
import { Platform } from 'react-native';

type GroupProps = {
  marginTop?: number,
}


export const Logo = styled.Image`

`

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

`

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
`

export const Group = styled.View<GroupProps>`
  width: 100%;
  margin-top: ${props => props.marginTop || 0}px;
`

export const SocialButton = styled.View`
  margin: 20px 0;
`

export const Span = styled.Text`
  text-align: center;
  margin-top: 21px;
  ${(props) => {
    return `
      color: ${props.theme.colors.softGray};
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.regular};
    `
  }}

`
export const BoldSpan = styled.Text`
  text-align: center;
  ${(props) => {
    return `
      color: ${props.theme.colors.softGray};
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.bold};
    `
  }}

`
