import styled from '../../../styled-components';
import { Platform } from 'react-native';

type GroupProps = {
  marginTop?: number,
}


export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

`

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
`

export const Group = styled.View<GroupProps>`
  width: 100%;
  margin-top: ${props => props.marginTop || 0}px;

`

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 21px;
  ${(props) => {
    return `
      color: ${props.theme.colors.darkGray};
      font-size: ${props.theme.typography.mediumFont};
      font-family: ${props.theme.typography.bold};
    `
  }}

`