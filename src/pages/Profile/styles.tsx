import styled from '../../../styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 16px 0;
`

export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0;
`

export const FlexHeader = styled.View`
  flex-direction: row;
`

export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 3px;
  margin-right: 16px;
`

export const TextName = styled.Text`
  ${(props) => {
    return`
    color: ${props.theme.colors.darkGray};
    font-size: ${props.theme.typography.mediumFont};
    font-family: ${props.theme.typography.bold};
    `
  }}
`

export const NickName = styled.Text`
  ${(props) => {
    return`
    color: ${props.theme.colors.textGray};
    font-size: ${props.theme.typography.smallestFont};
    font-family: ${props.theme.typography.regular};
    `
  }}
`

export const LargeTitle = styled.Text`
  ${(props) => {
    return`
    color: ${props.theme.colors.darkGray};
    font-size: ${props.theme.typography.mediumFont};
    font-family: ${props.theme.typography.bold};
    `
  }}
`

export const ListSpace = styled.View`
  margin-right: 10px;
`
