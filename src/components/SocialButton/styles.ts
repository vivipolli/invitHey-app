import { TouchableOpacity } from 'react-native';
import styled from '../../../styled-components';

interface ButtonProps {
  isDefault: boolean,
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
  top: 80px;
  width: 58px;
  height: 58px;
  border-radius: 38px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  ${(props) => {
    return`
      border-color: ${(props.theme.colors.lightGray)}
    `
  }}
`

export const Text = styled.Text<ButtonProps>`

`