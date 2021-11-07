import styled from '../../../styled-components';

import { FlatList } from 'react-native';
import { UserProps } from '.';


export const Container = styled.View`
    flex: 1;
    background-color: #FCFCFC;
    padding: 20px;
    padding-bottom: 40px;
`;

export const PeopleCardList = styled(FlatList as new () => FlatList<UserProps>).attrs({
    showsVerticalScrollIndicator: false
})`
  margin-top: 15px;
`;
