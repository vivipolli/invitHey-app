import React, { useState, useEffect } from 'react';

import { Alert, RefreshControl, View } from 'react-native';
import Parse from 'parse/react-native';


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

export default function Home() {
  const filter = {
    recent: 'recent',
    popular: 'popular',
    review: 'review',
    proximity: 'proximity',
  }

  const [filterActive, setFilterActive] = useState('all');
  const [events, setEvents] = useState([] as EventProps[]);

  const [refreshing, setRefreshing] = useState(false);

  function handleFilterActive(type: string) {
    setFilterActive(type);
  }

  const getEvents = async function () {
    const parseQuery: Parse.Query = new Parse.Query('Event');
    try {
      const eventsList = await parseQuery.find() as unknown as EventProps[];
      setEvents(eventsList);
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getEvents();
    refresh(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getEvents();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <HeaderHome />
      <Container>
        <SearchInput placeholder='Pesquise por evento, local ou interesse' />
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
      </Container>
    </View>
  );
}