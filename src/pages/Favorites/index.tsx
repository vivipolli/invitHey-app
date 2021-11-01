import React, { useState, useEffect } from 'react';

import { FlatList, Alert, RefreshControl } from 'react-native';

import Parse from 'parse/react-native';
import { first } from 'lodash';

import { EventCard, EventCardProps } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';

import { Container } from './styles';
import { UserProps } from '../CreateGuest';
import { refresh } from '../../utils/refresh';
import { parsedObject } from '../../utils/parsedObject';

export default function Favorites() {
  const [data, setData] = useState([] as EventCardProps[]);
  const [refreshing, setRefreshing] = useState(false);

  const getInitialData = async function () {
    const currentUser = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = JSON.parse(JSON.stringify(currentUser));

    const parseQuery: Parse.Query = new Parse.Query('Favorit');
    parseQuery.equalTo('userId', userParsed.objectId);

    try {
      let data = await parseQuery.find().then(first);
      const eventsParsed = data ? parsedObject(data) : [];
      setData(eventsParsed?.events);
      console.info(eventsParsed);
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getInitialData();
    refresh(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getInitialData();
  }, []);


  return (
    <GlobalComponent route="Favorites">
      <Container>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => {
            const event = JSON.parse(JSON.stringify(item))
            console.info(event);
            return (
              <EventCard
                title={event.title}
                banner={event.banner}
                datetime={event.datetime}
                city={event.city}
                uf={event.uf}
                eventId={event.objectId}
              />
            )
          }
          }
          keyExtractor={item => item.eventId}
        />
      </Container>
    </GlobalComponent >
  );
}