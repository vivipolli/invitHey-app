import { TouchableOpacity } from 'react-native';
import styled from '../../../styled-components';

interface ButtonProps {
  isDefault: boolean,
}

export const Button = styled(TouchableOpacity)<ButtonProps>`

`

export const Text = styled.Text<ButtonProps>`
  width: 100%;
  border-bottom-width: 1px;
  ${(props) => {
    return`
    color: ${props.theme.colors.blue};
    font-size: ${props.theme.typography.smallestFont};
    font-family: ${props.theme.typography.medium};
    border-bottom-color: ${props.theme.colors.blue};
    `
  }}
`