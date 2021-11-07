import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

import Parse from 'parse/react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import GlobalComponent from '../../components/GlobalApp';
import { PeopleCard } from '../../components/PeopleCard';
import SearchInput from '../../components/SearchInput';

import { Container, PeopleCardList } from './styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import { StackParams } from '../../routes/routes.types';

export interface UserProps {
  id: string;
  username: string;
  fullname: string;
}

export interface GuestProps {
  objectId: string;
  username: string;
  fullname: string;
  accepted: boolean;
  buttonTitle: 'Convidar' | 'Remover';
}

export function ConfirmedPeople() {
  const [users, setUsers] = useState([] as UserProps[]);
  const [guests, setGuests] = useState([] as GuestProps[]);
  const [filterName, setFilterName] = useState('');

  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();
  const { inviters }: any = route.params;


  // useEffect(() => {
  //   getUsers();
  // }, [])



  return (
    <GlobalComponent route="ConfirmedPeople">
      <Container>
        <PeopleCardList
          data={inviters}
          renderItem={({ item }) => {
            const user = JSON.parse(JSON.stringify(item))
            return (<PeopleCard
              username={user.username}
              avatar={user.avatar?.url}
              fullname={user.fullname}
            />)
          }
          }
          keyExtractor={item => item.id}
        />
      </Container>
    </GlobalComponent>
  );
};

