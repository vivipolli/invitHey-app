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
import { eventPointer, userPointer } from '../../utils/pointers';
import { parsedObject } from '../../utils/parsedObject';

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

export function InviteFriends() {
  const [users, setUsers] = useState([] as UserProps[]);
  const [guests, setGuests] = useState([] as GuestProps[]);
  const [filterName, setFilterName] = useState('');
  const [alreadyInvited, setAlreadyInvited] = useState([]);

  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();
  const { event, currentUser, peopleConfirmed }: any = route.params;

  const peopleConfirmedId = peopleConfirmed.map((person) => person.objectId);
  const alreadyConfirmed = new Set(peopleConfirmedId);
  const eventId = event.objectId

  async function inviteUser(user: GuestProps) {
    let Invite: Parse.Object = new Parse.Object('Invite');

    Invite.set('user', userPointer(user.objectId));
    Invite.set('inviteBy', currentUser.objectId);
    Invite.set('event', eventPointer(event.objectId));

    try {
      await Invite.save();
      return true;
    } catch (error: any) {
      console.info('Error!', error.message);
      return false;
    }
  }

  async function getInvited() {
    const peopleInviteQuery: Parse.Query = new Parse.Query('Invite');
    peopleInviteQuery.equalTo('event', eventPointer);

    await peopleInviteQuery
      .find()
      .then(async (invites: any) => {
        const inviteParsed = parsedObject(invites);
        console.info(inviteParsed);
        const invitedUser = inviteParsed.map((invite: any) => invite.user.objectId);
        setAlreadyInvited(invitedUser);
      }).catch((err) => console.info(err))
  }

  useEffect(() => {
    getInvited();
  }, [])

  function handleGuest(user: GuestProps) {
    const invited = guests.findIndex((elem) => elem.username === user.username);
    if (invited !== -1) {
      return
    } else {
      const newGuest = [...guests];
      user.accepted = false;
      newGuest.push(user);
      setGuests(newGuest);
      inviteUser(user);
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
        const parsedQuery = parsedObject(queriedUsers);
        const newInviters = parsedQuery.filter((user: any) => !alreadyConfirmed.has(user.objectId));
        setUsers(newInviters as unknown as [UserProps]);
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
    const hasInvited = alreadyInvited.includes(user.objectId);
    if (invited === -1 && !hasInvited) return 'Add à Lista';
    else return 'Convite enviado';
  };

  return (
    <GlobalComponent route="CreateGuest">
      <Container>
        <SearchInput value={filterName} onChangeText={(value) => setFilterName(value)} />
        <PeopleCardList
          data={users}
          renderItem={({ item }) => {
            const user = JSON.parse(JSON.stringify(item))
            return (<PeopleCard
              handleButton={() => handleGuest(user)}
              username={user.username}
              avatar={user.avatar?.url}
              fullname={user.fullname}
              buttonTitle={checkGuest(user)}
            />)
          }
          }
          keyExtractor={item => item.id}
        />
      </Container>
    </GlobalComponent>
  );
};

