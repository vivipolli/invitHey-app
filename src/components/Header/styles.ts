import styled from '../../../styled-components';
import { Feather } from '@expo/vector-icons';
 

export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.white};
    height: 56px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
`;

export const ArrowIcon = styled(Feather)`
    font-size: ${(props) => props.theme.typography.smallFont};
    color: ${(props) => props.theme.colors.primary}; 
    margin-right: 28px;
`;

export const Back = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})``;


export const Page = styled.Text`
    font-family: ${(props) => props.theme.typography.regular};
    font-size: ${(props) => props.theme.typography.largeFont};
    color: ${(props) => props.theme.colors.darkGray};
`;
