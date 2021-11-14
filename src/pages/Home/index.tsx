import React, { useState, useEffect } from 'react';

import { Alert, RefreshControl, View } from 'react-native';
import Parse from 'parse/react-native';
import { useDispatch } from 'react-redux';


import {
  Container,
  EventCardsList,
  FilterButtonList,
  List
} from './styles';
import { TagButton } from '../../components/TagButton';
import { EventCard } from '../../components/EventCard';
import SearchInput from '../../components/SearchInput';
import { HeaderHome } from './HeaderHome';
import { parsedObject } from '../../utils/parsedObject';
import { ListSpace } from '../Profile/styles';
import { EventProps } from '../Event';
import { refresh } from '../../utils/refresh';
import { Loading } from '../../components/Loading';
import { UserInfo } from '../../state/types/user.types';
import { currentUserAction } from '../../state/actions/user.action';

export default function Home() {
  const filter = {
    recent: 'recent',
    popular: 'popular',
    review: 'review',
    proximity: 'proximity',
  }

  const [filterActive, setFilterActive] = useState('recent');
  const [events, setEvents] = useState([] as EventProps[]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterEvent, setFilterEvent] = useState('');

  const dispatch = useDispatch();

  const getUserData = async function () {
    const currentUser = await Parse.User.currentAsync() as unknown as UserInfo;
    const userParsed = parsedObject(currentUser);
    dispatch(currentUserAction(userParsed));
  };

  function handleFilterActive(type: string) {
    setFilterActive(type);
  }

  const filterEvents = async function (): Promise<Boolean> {
    const userFilter: string = filterEvent;
    const parseQuery: Parse.Query = new Parse.Query('Event');

    if (userFilter !== '') {
      parseQuery.contains('name', userFilter);
      parseQuery.matches('name', userFilter as unknown as RegExp, 'i');
    }

    return await parseQuery.find()
      .then(async (queriedEvents) => {
        const eventsParsed = parsedObject(queriedEvents);
        const publicEvents = eventsParsed.filter((event: any) => event.type === "public");
        setEvents(publicEvents);
        setLoading(false);
        return true;
      })
      .catch((error: any) => {
        Alert.alert('Error!', error.message);
        setLoading(false);
        return false;
      });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    filterEvents();
    refresh(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getUserData()
  }, []);

  useEffect(() => {
    filterEvents()
  }, [filterEvent]);


  return (
    <View style={{ flex: 1 }}>
      <HeaderHome />
      <Container>
        <SearchInput
          value={filterEvent} onChangeText={(value) => setFilterEvent(value)}
          placeholder='Pesquisar eventos'
        />
        <View>
          <FilterButtonList >
            <TagButton
              textBtn='Mais Recentes'
              isActive={filterActive === filter.recent}
              handleButton={() => handleFilterActive(filter.recent)}
            />
            <ListSpace />

            <TagButton
              textBtn='Mais Populares'
              isActive={filterActive === filter.popular}
              handleButton={() => handleFilterActive(filter.popular)}
            />
            <ListSpace />

            <TagButton
              textBtn='Avaliacao'
              isActive={filterActive === filter.review}
              handleButton={() => handleFilterActive(filter.review)}
            // 
            />
            <ListSpace />

            <TagButton
              textBtn='Proximidade'
              isActive={filterActive === filter.proximity}
              handleButton={() => handleFilterActive(filter.proximity)}
            />
          </FilterButtonList>
        </View>
        {loading ? <Loading /> :
          <List>
            <EventCardsList
              data={events}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              renderItem={({ item }) => {
                const event = parsedObject(item);
                return (
                  <EventCard
                    title={event.name}
                    datetime={event.datetime}
                    eventId={event.objectId}
                    city={event.address.city}
                    uf={event.address.state}
                    banner={event.banner?.url}
                  />
                )
              }}
              keyExtractor={(item, index) => { return parsedObject(item).objectId }}
            />
          </List>
        }
      </Container>
    </View>
  );
}