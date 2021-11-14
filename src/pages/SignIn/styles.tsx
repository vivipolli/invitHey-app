import styled from '../../../styled-components';

type GroupProps = {
  marginTop?: number,
}

export const Container = styled.View`
  align-items: center;
  padding: 180px 25px;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
`

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 20%;
`

export const Group = styled.View<GroupProps>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const SocialGroup = styled.View`
  justify-content: space-around;
  flex-direction: row;

`

export const BoldSpan = styled.Text`
  text-align: center;
  top: 50px;
  ${(props) => {
    return `
      color: ${props.theme.colors.softGray};
      font-size: ${props.theme.typography.smallFont};
      font-family: ${props.theme.typography.regular};
    `
  }}
`

export const BorderSpan = styled.View`
  top: 53px;
  border-width: 0.3px;
  width: 130px;
  ${(props) => {
    return`
      border-color: ${props.theme.colors.lineGray};
    `
  }}
` 
export const Text = styled.Text`
  left: -3px;
  ${(props) => {
    return `
      color: ${props.theme.colors.softGray};
      font-size: ${props.theme.typography.smallFont};
      font-family: ${props.theme.typography.regular};
    `
  }}
`

export const ButtonRegister = styled.View`
  top: 120px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonReboot = styled.View`
  text-align: right;
  align-self: flex-end;
`