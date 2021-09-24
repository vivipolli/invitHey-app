import styled from '../../../styled-components';

import { MaterialIcons } from '@expo/vector-icons';

import { FlatList } from 'react-native';

import { PeopleCardListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: #FCFCFC;
`;

export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    /* background-color: #F1F1F1; */
`;

export const Menu = styled(MaterialIcons)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkGray};
`;

export const User = styled.View`
    flex-direction: row;
`;

export const PeopleCardList = styled(FlatList as new () => FlatList<PeopleCardListProps>).attrs({
    showsVerticalScrollIndicator: false
})``;
