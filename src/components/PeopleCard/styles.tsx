import styled from '../../../styled-components';

export const Card = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const PeopleImage = styled.Image`
    width: 44px;
    height: 44px;
    background-color: #ccc;
`;

export const PeopleInfo = styled.View`
    margin-left: 14px;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

export const NickName = styled.Text`
    font-family: ${({theme}) => theme.typography.bold};
    font-size: ${({theme}) => theme.typography.smallFont};
    color: ${({theme}) => theme.colors.darkGray};
`;

export const NormalName = styled.Text`
    font-family: ${({theme}) => theme.typography.regular};
    font-size: ${({theme}) => theme.typography.smallestFont};
    color: ${({theme}) => theme.colors.darkGray};
`;