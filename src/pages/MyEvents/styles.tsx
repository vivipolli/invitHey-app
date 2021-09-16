import styled from '../../../styled-components';
import { FlatList } from 'react-native';
import { ListProps } from '.';

export const Container = styled.View`
    flex: 1;
`;

export const List = styled.View`
    flex: 1;
    margin-top: 24px;
`;

export const EventCardsList = styled(FlatList as new () => FlatList<ListProps>).attrs({
    showsVerticalScrollIndicator: false
})``;