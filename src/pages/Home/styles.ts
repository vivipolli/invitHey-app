import { FlatList } from 'react-native';
import styled from '../../../styled-components';


type ListProps = {

};

export const FilterButtonList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
    margin-top: 8px;
`;


export const List = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #FCFCFC;
`;


export const EventCardsList = styled(FlatList as new () => FlatList<ListProps>).attrs({
  showsVerticalScrollIndicator: false
})``;

