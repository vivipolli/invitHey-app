import { TouchableOpacity } from 'react-native';
import styled from '../../../styled-components';

interface ButtonProps {
  isDefault: boolean,
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: gray;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
`

export const Button = styled(TouchableOpacity)<ButtonProps>`
  top: 30px; 
  height: 56px;
  width: 100%;
  border-radius: 38px;
  elevation: 2;
  align-items: center;
  flex-direction: row;
  padding: ${props=>  props.isDefault ? '0' : '0 40px'};
  justify-content: ${props=>  props.isDefault ? 'center' : 'space-around'};
  background-color: ${props => props.isDefault ? props.theme.colors?.primary : props.theme.colors?.white};
`

export const Text = styled.Text<ButtonProps>`
  ${(props) => {
    return `
      color: ${props.isDefault ? props.theme.colors.white : props.theme.colors.textGray};
      font-size: ${props.theme.typography.smallFont};
      font-family: ${props.theme.typography.medium};
    `
  }}
`