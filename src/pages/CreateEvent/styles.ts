import styled from '../../../styled-components';

import { MaterialIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';


export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
    flex: 1;
    padding: 20px;
    
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  ${(props) => {
    return `
      color: ${props.theme.colors.darkGray};
      font-size: ${props.theme.typography.smallestFont};
      font-family: ${props.theme.typography.medium};
  `
  }}
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const CategoryText = styled.Text`
    ${(props) => {
    return `
        color: ${props.theme.colors.darkGray};
        font-size: ${props.theme.typography.smallFont};
        font-family: ${props.theme.typography.regular};
        `
  }}
`;

export const Separator = styled.View`
    width: 100%;
    margin: 30px auto;
    height: 1px;
    background-color: #EDEFF3;
`;

export const FlexRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Div = styled.View`
    width: 48%;
`;

export const Advert = styled.Text`
    ${(props) => {
    return `
        color: ${props.theme.colors.textGray};
        font-size: ${props.theme.typography.smallestFont};
        font-family: ${props.theme.typography.regular};
        `
  }}
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.textGray};
    font-size: 16px;
    margin-right: 10px;
`;

export const Brlamount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Expand = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})``;

export const CalendarIcon = styled(MaterialIcons)`
    color: #898D9A;
    font-size: 18px;
`;

export const Space = styled.View`
  height: 50px;
`;