import styled from '../../../styled-components';


export const AddBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 100px;
`;

export const TextBtn = styled.Text`
  color: ${props => props.theme.colors.secondary};
  margin-left: 5px;
  font-family: ${props => props.theme.typography.medium};
  font-size: ${props => props.theme.typography.mediumFont};
`;

export const RemoveBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin: 10px;
`;

export const RemoveTextBtn = styled.Text`
  color: ${props => props.theme.colors.darkGray};
  margin-left: 3px;
  font-family: ${props => props.theme.typography.medium};
  font-size: ${props => props.theme.typography.smallestFont};
`;

export const ButtonBottom = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  align-self: center;
`;



