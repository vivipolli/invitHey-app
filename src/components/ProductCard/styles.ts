import styled from '../../../styled-components';

import { AntDesign } from '@expo/vector-icons';

export const Card = styled.View`
    width: 328px;
    height: 136px;
    border-radius: 10px;
    padding: 16px; 
    flex-direction: row;
    background-color: #FCFCFC;
`;

// Product Image
export const ProductImage = styled.Image`
    width: 88px;
    height: 104px;
    border-radius: 5px;
    background-color: #ccc;
`;

// Main Info
export const MainInfo = styled.View`
justify-content: space-between;
    margin-left: 16px;
    flex: 1; 
`;


// Header
export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

// Button X
export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})``;

// Header Title
export const Title = styled.Text`
    max-width: 160px;
    font-size: ${({theme}) => theme.typography.smallestFont};
    font-family: ${({theme}) => theme.typography.regular};
`;

// Close Icon
export const Icon = styled(AntDesign)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkGray};
    background-color: ${({theme}) => theme.colors.lightGray};
    border-radius: 50px;
    padding: 5px;
`;

// Footer
export const Footer = styled.View``;

// Amount
export const Amount = styled.Text`
    font-size: ${({theme}) => theme.typography.mediumFont};
    font-family: ${({theme}) => theme.typography.medium};
    color: ${({theme}) => theme.colors.darkGray};
`;

// Payment Condition
export const PaymentCondition = styled.Text`
    font-size: ${({theme}) => theme.typography.tinyFont};
    font-family: ${({theme}) => theme.typography.regular};
    color: ${({theme}) => theme.colors.textGray};
`;