import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
 

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    height: 56px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
`;

export const ArrowIcon = styled(Feather)`
    font-size: ${({theme}) => theme.fonts.smallFont};
    color: ${({theme}) => theme.colors.primary}; 
    margin-right: 28px;
`;

export const Back = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})``;


export const Page = styled.View`
    font-family: ${({theme}) => theme.weight.medium};
    font-size: ${({theme}) => theme.fonts.largeFont};
    color: ${({theme}) => theme.colors.darkGray};
`;
