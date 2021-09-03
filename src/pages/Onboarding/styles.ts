import styled from '../../../styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
`

export const Group = styled.View`
  width: 100%;
  align-items: center;
`

export const BoldSpan = styled.Text` 
margin-top: -100px;
  top: 30px;
  ${(props) => {
    return `
      color: ${props.theme.colors.darkGray};
      font-family: ${props.theme.typography.bold};
      font-size: ${props.theme.typography.mediumFont}
    `
  }}
`

export const Text = styled.Text`
  text-align: justify;
  bottom: 80px;
  ${(props) => {
    return`
      color: ${props.theme.colors.textGray}
      font-size: ${props.theme.typography.smallFont}
      font-family: ${props.theme.typography.regular}
    `
  }}
`