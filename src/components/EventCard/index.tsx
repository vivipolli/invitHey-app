import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Parse from 'parse/react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

import { TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { StackParams } from '../../routes/routes.types';

import {
  Card,
  Icon,
  EventImage,
  Hold,
  TitleHeart,
  CardTitle,
  CardInfo,
  Date,
  Footer,
  DateIcon,
  Text,
  PinIcon,
  HeartIcon
} from './styles';

export type EventCardProps = {
  title: string,
  banner?: string,
  datetime: string,
  eventId: string,
  city: string,
  uf: string,
}

export function EventCard({
  title,
  datetime,
  eventId,
  banner,
  city,
  uf,

}: EventCardProps) {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  const [isActiveHeart, setIsActiveHeart] = useState(false);

  const newEvent = {
    eventId,
    datetime,
    title,
    banner,
    city,
    uf,
  };

  function openEventDetail() {
    navigation.navigate('Event', { eventId })
  }

  async function handleFavoriteEvent() {
    const currentUser = await Parse.User.currentAsync() as any;
    const userParsed = JSON.parse(JSON.stringify(currentUser));

    setIsActiveHeart((heart) => !heart);

    let Favorit: Parse.Object = new Parse.Object('Favorit');

    const query: Parse.Query = new Parse.Query('Favorit');
    query.equalTo('userId', userParsed?.objectId);
    const objects = await query.find();
    try {
      if (objects.length) {
        const objectParsed = JSON.parse(JSON.stringify(objects[0]));
        let events = objectParsed.events;
        const objectId = objectParsed.objectId;

        if (!isActiveHeart) {
          events.push(newEvent);
          Favorit.set('objectId', objectId);
          Favorit.set('events', events);
          try {
            await Favorit.save();
          } catch (error) {
            console.error('Error', error);
          }
        } else {
          const eventIndex = events.indexOf((item: any) => item.eventId === eventId);
          events.splice(eventIndex, 1);
          Favorit.set('objectId', objectId);
          Favorit.set('events', events);
          try {
            await Favorit.save();
          } catch (error) {
            console.error('Error', error);
          }
        }
      } else {
        Favorit.set('events', [newEvent]);
        Favorit.set('userId', userParsed?.objectId);
        try {
          await Favorit.save();
        } catch (error) {
          console.error('Error', error);
        }
      }
    } catch (error) {
      console.error('Error while retrieving object ', error);
    }
  }

  return (
    <Card>
      <TouchableOpacity activeOpacity={0.8} onPress={openEventDetail}>
        <EventImage
          source={{ uri: banner }}
        />
      </TouchableOpacity>
      <Hold>
        <TitleHeart>
          <CardTitle>{title}</CardTitle>
          <HeartIcon onPress={handleFavoriteEvent}>
            <Icon isActiveIcon={isActiveHeart} name='heart' />
          </HeartIcon>
        </TitleHeart>
        <CardInfo>
          <Date>
            <DateIcon name="calendar-blank" />
            <Text>{moment(datetime).format('LLLL')}</Text>
          </Date>
          <Footer>
            <PinIcon name="location-pin" />
            <Text>{`${city}/${uf}`}</Text>
          </Footer>
        </CardInfo>
      </Hold>
    </Card>
  )
}