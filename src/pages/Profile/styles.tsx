import styled from '../../../styled-components';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0;
`

export const FlexHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  margin-right: 16px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.lightGray};
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

export const Icon = styled(MaterialIcons)`
  ${(props) => {
  return `
    color: ${(props.theme.colors.darkGray)};
  `
}}
`;

export const NickName = styled.Text`
  ${(props) => {
    return`
    color: ${props.theme.colors.textGray};
    font-size: ${props.theme.typography.smallestFont};
    font-family: ${props.theme.typography.regular};
    `
  }}
`

export const InfoText = styled.Text`
  width: 30%;
  text-align: left;
  ${(props) => {
    return`
    color: ${props.theme.colors.textGray};
    font-size: 12px;
    font-family: ${props.theme.typography.regular};
    `
  }}
`

export const TextBio = styled.Text`
  margin-top: 20px;
  ${(props) => {
    return`
    color: ${props.theme.colors.textGray};
    font-size: 13px;
    font-family: ${props.theme.typography.regular};
    `
  }}
`

export const LargeTitle = styled.Text`
  margin-top: 30px;
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


export const ButtonModal = styled.TouchableOpacity.attrs({
  activeOpacity: .6
})`
  position: absolute;
  right: 0;
`;

export const ModalIcon = styled(MaterialIcons)`
  ${(props) => {
  return `
    color: ${(props.theme.colors.darkGray)};
  `
}}
`;

export const HeaderBio = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px;
`

export const HeaderCheckIcon = styled(MaterialIcons)`
  ${(props) => {
  return `
    color: ${(props.theme.colors.secondary)};
  `
}}
`;