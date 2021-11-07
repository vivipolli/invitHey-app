import React, { useState, useEffect } from 'react';

import { FlatList, RefreshControl } from 'react-native';

import Parse from 'parse/react-native';

import { EventCard, EventCardProps } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';

import { Container } from './styles';
import { UserProps } from '../CreateGuest';
import { refresh } from '../../utils/refresh';
import { parsedObject } from '../../utils/parsedObject';
import { Loading } from '../../components/Loading';

export default function Invites() {
  const [data, setData] = useState([] as EventCardProps[]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const getInitialData = async function () {
    const currentUser = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = parsedObject(currentUser);

    const query: Parse.Query = new Parse.Query('Invite');
    query.equalTo('userId', userParsed.objectId);

    try {
      const results: EventCardProps[] = await query.find() as unknown as EventCardProps[];
      setData(results);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
    <GlobalComponent route="Invites">
      <Container>
        {loading ? <Loading /> :
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({ item }) => {
              const invite = parsedObject(item);
              return (
                <EventCard
                  title={invite.event.name}
                  banner={invite.event.banner.url}
                  datetime={invite.event.datetime}
                  city={invite.event.address.city}
                  uf={invite.event.address.state}
                  eventId={invite.event.objectId}
                />
              )
            }
            }
            keyExtractor={item => item.eventId}
          />
        }
      </Container>
    </GlobalComponent >
  );
}