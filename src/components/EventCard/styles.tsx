import styled from '../../../styled-components';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    isActiveIcon: boolean;
}

export const Text = styled.Text`
    font-family: ${props => props.theme.typography.regular};
    color: ${props => props.theme.colors.darkGray};
    font-size: ${props => props.theme.typography.tinyFont};
`  
;

export const Card = styled.View`
    margin-top: 10px;
    width: 328px;
    height: 144px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.lightGray};
    padding: 16px;
`;
export const Hold = styled.View`
    flex: 1;
    justify-content: space-between;
`;

// Card Header
export const CardHeader = styled.View`
    flex-direction: row;
`;

export const Icon = styled(AntDesign)<Props>`
    color: ${props => props.isActiveIcon ? props.theme.colors.red : props.theme.colors.gray70}; 
    font-size: ${props => props.theme.typography.mediumFont};
`;

export const EventImage = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 10px;
`;

export const TitleHeart = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    margin-top: 4px;
    margin-left: 16px;
    color: ${props => props.theme.colors.darkGray};
    font-size: ${props => props.theme.typography.mediumFont};
    font-family: ${props => props.theme.typography.medium};
`;

// Card Info
export const CardInfo = styled.View`
    font-size: 12px;
    flex-direction: row;
    margin-bottom: 8px;
    margin-left: 13px;
`;

export const Date = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 13px;
    color: ${props => props.theme.colors.darkGray};
`;

export const Hour = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 13px;
    color: ${props => props.theme.colors.darkGray};
`;

export const Payment = styled.View`
    flex-direction: row;
    align-items: center;
    color: ${props => props.theme.colors.darkGray};
`;


// Footer Card
export const Footer = styled.View`
    margin-top: 16px;
`;

export const FooterText = styled.Text`
    font-size: ${props => props.theme.typography.tinyFont};
    font-family: ${props => props.theme.typography.regular};
    color: ${props => props.theme.colors.textGray};
`;

export const HourIcon = styled(MaterialCommunityIcons)`
    color: ${props => props.theme.colors.textGray};
    font-size: ${props => props.theme.typography.tinyFont};
    margin-right: 8px;   
`;

export const PaymentIcon = styled(MaterialCommunityIcons)`
    color: ${props => props.theme.colors.textGray};
    font-size: ${props => props.theme.typography.tinyFont};
    margin-right: 8px;   
`;

export const DateIcon = styled(MaterialCommunityIcons)`
    color: ${props => props.theme.colors.textGray};
    font-size: ${props => props.theme.typography.tinyFont};
    margin-right: 8px;
`; 