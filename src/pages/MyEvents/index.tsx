import React from 'react';

import Parse from 'parse/react-native';

import {
  Container,
  List,
  EventCardsList
} from './styles';

export interface ListProps extends CardProps {
  id: string;
}

import { EventCard, CardProps } from '../../components/EventCard';

export const data: ListProps[] = [
  {
    id: '1',
    title: 'Fyah Burnin',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
    hourInfo: '16h',
    dateInfo: '06/07/1922',
    paymentInfo: 'Pago',
    isActiveIcon: false,
  },
];

export default function MeusEventos() {

  return (
    <Container>
      <List>
        <EventCardsList
          data={data}
          renderItem={({ item }) =>
            <EventCard
              title={item.id}
              description={item.description}
              hourInfo={item.hourInfo}
              dateInfo={item.dateInfo}
              isActiveIcon={item.isActiveIcon}
              paymentInfo={item.paymentInfo}
              handleChangeIcon={item.handleChangeIcon}
            />}
          keyExtractor={item => item.id}
        />
      </List>
    </Container>
  );
}