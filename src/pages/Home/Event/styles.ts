import styled from '../../../../styled-components';

import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export const BackgroundImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 208px;
`;

export const Container = styled.View`
    align-items: flex-end;
    justify-content: flex-end;
`;

export const Separator = styled.View`
    position: absolute;
    align-items: center; 
    flex-direction: row;
    padding: 0 20px 20px 0;
`;

export const ConfirmArea = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: #FCFCFC;
`;

export const ConfirmText = styled.Text`
    font-size: ${props => props.theme.typography.smallestFont};
    font-family: ${props => props.theme.typography.medium}; 
    margin-right: 5px;
`;

export const Done = styled(MaterialIcons)`
    font-size: ${props => props.theme.typography.mediumFont};
    color: #4CB4FF; 
`;

export const Favorite = styled(MaterialIcons)`
    font-size: 24px;
    margin-left: 18px;
    color: #FF5454;
    background-color: #FFFFFF;
    border-radius: 50px;
    padding: 10px;    
`;

export const FavoriteButton = styled(TouchableOpacity).attrs({
    activeOpacity: .8
})``;

export const ModalView = styled.View`
    padding: 16px 24px 0 24px;
    height: 400px;
`;

export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

export const Title = styled.Text`
    ${(props) => {
    return`
      color: ${(props.theme.colors.darkGray)};
      font-size: ${(props.theme.typography.largeFont)};
      font-family: ${(props.theme.typography.medium)};
    `
  }}
`;

export const Icon = styled(MaterialIcons)`
    ${(props) => {
    return`
      color: ${(props.theme.colors.darkGray)};
      font-size: ${(props.theme.typography.largeFont)};
    `
  }}
`;

export const ButtonModal = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
`;

export const CreatedBy = styled.Text`
    ${(props) => {
    return`
      color: ${(props.theme.colors.textGray)};
      font-size: ${(props.theme.typography.smallestFont)};
      font-family: ${(props.theme.typography.regular)};
    `
  }}
`;

export const Data = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
`;

export const DataInfo = styled.Text`
    ${(props) => {
        return`
            font-size: ${(props.theme.typography.smallestFont)};
            font-family: ${(props.theme.typography.medium)};
            color: ${(props.theme.colors.darkGray)};
        `
    }}
    margin-left: 8px;
`;

export const DataIcon = styled(MaterialIcons)`
    ${(props) => {
    return`
      color: ${(props.theme.colors.textGray)};
      font-size: ${(props.theme.typography.smallestFont)};
      font-family: ${(props.theme.typography.regular)};
    `
  }}
`;

export const LocalDescription = styled.Text`
    ${(props) => {
        return`
            color: ${(props.theme.colors.darkGray)};
            font-size: ${(props.theme.typography.smallestFont)};
            font-family: ${(props.theme.typography.medium)};
        `
    }}
    margin-left: 10px;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    justify-content: space-between;
`;
export const Description = styled.View`
    margin-top: 30px;
    padding: 0 10px;
`;

export const EventDescription = styled.Text`
    ${(props) => {
        return`
            color: ${props.theme.colors.darkGray};
            font-family: ${props.theme.typography.regular}; 
            font-size: ${props.theme.typography.smallestFont};
        `
    }}
    
`;

export const GeneralInfo = styled.View`
    margin-top: -12px;
    padding: 16px 24px;
    background-color: #FCFCFC;
`;

export const Main = styled.View`
    margin-top: 40px;
`;

export const MainText = styled.Text`
    ${(props) => {
        return`
            color: ${props.theme.colors.darkGray};
            font-family: ${props.theme.typography.regular}; 
            font-size: ${props.theme.typography.smallFont};
        `
    }}
`;

export const MainOption = styled.View`
    justify-content: space-between;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;