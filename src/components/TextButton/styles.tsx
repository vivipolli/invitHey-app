import styled from '../../../styled-components';


export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  ${(props) => {
    return `
      color: ${ props.theme.colors.textGray};
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.regular};
    `
  }}
`

export const PrimaryText = styled.Text`
  margin-left: 5px;
  ${(props) => {
    return `
      color: ${ props.theme.colors.primary};
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.bold};
    `
  }}
`