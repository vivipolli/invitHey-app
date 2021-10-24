import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  ScrollView,
  Alert
} from 'react-native';

import Parse from 'parse/react-native';

import avatar from '../../assets/images/logo_baloon.jpeg';
import { EventCard } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';
import { TagButton } from '../../components/TagButton';

import {
  Avatar,
  Container,
  NickName,
  TextName,
  FlexRow,
  LargeTitle,
  ListSpace,
  FlexHeader
} from './styles';
import { UserProps } from '../CreateGuest';

export default function Profile() {
  const [btnActive, setBtnActive] = useState('');
  const [user, setUser] = useState({} as UserProps);
  const [filterActive, setFilterActive] = useState('all');
  const [data, setData] = useState([]);

  const filter = {
    all: 'all',
    created: 'created',
    participating: 'participating',
    following: 'following',
  }

  function handleBtnActive(type: string) {
    setBtnActive(type);
  }

  const getInitialData = async function () {
    const currentUser = await Parse.User.currentAsync() as unknown as UserProps;
    console.info(currentUser);
    console.info(currentUser.get('username'));

    setUser(currentUser);

    const parseQuery: Parse.Query = new Parse.Query('Event');
    try {
      let all: Parse.Object[] = await parseQuery.find();
      setData(all);
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  }

  useEffect(() => {
    getInitialData();
  }, []);

  const handleFilterActive = async function (type: string): Promise<Boolean> {
    setFilterActive(type);
    const query: Parse.Query = new Parse.Query('Event');

    try {
      let events: Parse.Object[] = await query.find();
      if (type === 'all') {
        setData(events);
      } else if (type === 'created') {
        query.equalTo('owner', user.get('username'));
        return await query
        .find()
        .then(async (myEvents) => {
          setData(myEvents);
          return true;
        })
        .catch((error: any) => {
          Alert.alert('Error!', error.message);
          return false;
        });

      } else {
        //participating
        const eventsParsed = JSON.parse(JSON.stringify(events));
        const participating = eventsParsed.filter((event: any) => event.guests.filter((guest: any) => guest.username === user?.get('username')));
        setData(participating);
      }

      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };


  };

  return (
    <GlobalComponent>
      <FlexHeader>
        <Avatar source={avatar} />
        <View>
          <TextName>{user.get('fullname')}</TextName>
          <NickName>{user.get('username')}</NickName> 
        </View>
      </FlexHeader>

      <FlexRow>
        <TagButton
          isActive={btnActive === 'followers'}
          handleButton={() => handleBtnActive('followers')}
          textBtn="Seguidores (530)" />
        <TagButton
          isActive={btnActive === 'following'}
          handleButton={() => handleBtnActive('following')}
          textBtn="Seguindo (240)" />
      </FlexRow>

      <View>
        <LargeTitle>
          Meus Eventos
        </LargeTitle>

        <FlexRow>
          <ScrollView horizontal>
            <TagButton
              isActive={filterActive === filter.all}
              handleButton={() => handleFilterActive(filter.all)}
              textBtn="Todos" />
            <ListSpace />

            <TagButton
              isActive={filterActive === filter.created}
              handleButton={() => handleFilterActive(filter.created)}
              textBtn="Criados" />
            <ListSpace />

            <TagButton
              isActive={filterActive === filter.participating}
              handleButton={() => handleFilterActive(filter.participating)}
              textBtn="Participando" />
            <ListSpace />

            <TagButton
              isActive={filterActive === filter.following}
              handleButton={() => handleFilterActive(filter.following)}
              textBtn="Seguindo" />
          </ScrollView>
        </FlexRow>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const event = JSON.parse(JSON.stringify(item))
            return (
              <EventCard
                title={event.title}
                description={event.description}
                hourInfo={event.hourInfo}
                datetime={event.dateInfo}
                isActiveIcon={event.isActiveIcon}
                paymentInfo={event.paymentInfo}
              />
            )
          }
          }
          keyExtractor={item => item.id}
        />

      </View>
    </GlobalComponent >
  );
}