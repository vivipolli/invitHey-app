import styled from '../../../styled-components';

import { FlatList } from 'react-native';
import { UserProps } from '.';


export const Container = styled.View`
    flex: 1;
    background-color: #FCFCFC;
`;

export const PeopleCardList = styled(FlatList as new () => FlatList<UserProps>).attrs({
    showsVerticalScrollIndicator: false
})``;
