import styled from '../../../styled-components';

import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

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
  height: 144px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.lightGray};
  padding-right: 16px;
  flex-direction: row;
`;
export const Hold = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: 5px;
`;

// Card Header
export const CardHeader = styled.View`
  flex-direction: row;
`;

export const Icon = styled(AntDesign) <Props>`
  color: ${props => props.isActiveIcon ? props.theme.colors.red : props.theme.colors.gray70}; 
    color: ${props => props.isActiveIcon ? props.theme.colors.red : props.theme.colors.gray70}; 
  color: ${props => props.isActiveIcon ? props.theme.colors.red : props.theme.colors.gray70}; 
  font-size: ${props => props.theme.typography.mediumFont};
`;

export const EventImage = styled.Image`
  width: 150px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TitleHeart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  margin-top: 20px;
  margin-left: 16px;
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.typography.smallFont};
  font-family: ${props => props.theme.typography.medium};
`;

// Card Info
export const CardInfo = styled.View`
  font-size: 12px;
  margin-bottom: 8px;
  margin-left: 13px;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 13px;
  color: ${props => props.theme.colors.darkGray};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 5px;
`;

export const FooterText = styled.Text`
  font-size: ${props => props.theme.typography.tinyFont};
  font-family: ${props => props.theme.typography.regular};
  color: ${props => props.theme.colors.textGray};
`;

export const PinIcon = styled(Entypo)`
  color: ${props => props.theme.colors.textGray};
  font-size: ${props => props.theme.typography.tinyFont};
  margin-right: 8px;   
    margin-right: 8px;   
  margin-right: 8px;   
`;

export const DateIcon = styled(MaterialCommunityIcons)`
  color: ${props => props.theme.colors.textGray};
  font-size: ${props => props.theme.typography.tinyFont};
  margin-right: 8px;
`;