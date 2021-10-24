import React, { useState, useEffect } from 'react';

import { Alert, TouchableOpacity, View } from 'react-native';

import Parse from 'parse/react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import GlobalComponent from '../../components/GlobalApp';
import { PeopleCard } from '../../components/PeopleCard';
import SearchInput from '../../components/SearchInput';

import { PeopleCardList } from './styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import { StackParams } from '../../routes/routes.types';

export interface UserProps {
  get(arg0: string): any;
  id: string;
  username: string;
  fullname: string;
}

export interface GuestProps {
  objectId: string;
  username: string;
  fullname: string;
  buttonTitle: 'Convidar' | 'Remover';
}

export function CreateGuest() {
  const [users, setUsers] = useState([] as UserProps[]);
  const [guests, setGuests] = useState([] as GuestProps[]);
  const [filterName, setFilterName] = useState('');

  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();
  const { objectId }: any = route.params;
  console.log(objectId);

  function handleGuest(user: GuestProps) {
    const invited = guests.findIndex((elem) => elem.username === user.username);

    if (invited !== -1) {
      const field = guests.filter(item => item.username !== user.username);
      setGuests(field);
    } else {
      const newGuest = [...guests];
      newGuest.push(user);
      setGuests(newGuest);
    }
  };

  const getUsers = async function (): Promise<Boolean> {
    const userFilter: string = filterName;
    const parseQuery: Parse.Query = new Parse.Query(Parse.User);

    if (userFilter !== '') {
      parseQuery.contains('username', userFilter);
      parseQuery.matches('username', userFilter as unknown as RegExp, 'i');
    }
    return await parseQuery
      .find()
      .then(async (queriedUsers) => {
        setUsers(queriedUsers as unknown as [UserProps]);
        return true;
      })
      .catch((error: any) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  useEffect(() => {
    getUsers();
  }, [filterName])

  const checkGuest = (user: UserProps) => {
    const invited = guests.findIndex((elem) => elem.username === user.username);
    console.log(invited)
    if (invited === -1) return 'Add à Lista';
    else return 'Remover';
  };

  const onSubmit = async function (): Promise<boolean> {
    let Event: Parse.Object = new Parse.Object('Event');
    Event.set('objectId', objectId);
    Event.set('guests', guests);

    try {
      await Event.save();
      Alert.alert('Successo!', 'Lista adicionada');
      return true;
    } catch (error) {
      console.info(error)
      return false;
    };
  };

  return (
    <GlobalComponent>
      <SearchInput value={filterName} onChangeText={(value) => setFilterName(value)} />
      <PeopleCardList
        data={users}
        renderItem={({ item }) => {
          const user = JSON.parse(JSON.stringify(item))
          return (<PeopleCard
            handleButton={() => handleGuest(user)}
            username={user.username}
            fullname={user.fullname}
            buttonTitle={checkGuest(user)}
          />)
        }
        }
        keyExtractor={item => item.id}
      />
      <PrimaryBtn
        isDefault
        onPress={onSubmit} >
        Salvar
      </PrimaryBtn>
    </GlobalComponent>
  );
};

