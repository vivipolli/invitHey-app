import React from 'react';

import {
  Container,
  List,
  EventCardsList
} from './styles';

export interface ListProps extends CardProps {
  id: string;
}

import { EventCard, CardProps } from '../../components/EventCard';

export function MeusEventos() {

  const handleIcon = () => {
    // to do: chancge icon state
  }

  const data: ListProps[] = [
    {
      id: '1',
      title: 'Fyah Burnin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '2',
      title: 'Fura Yhtya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    }, {
      id: '3',
      title: 'Fura Yhtya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '4',
      title: 'Fura Yhtya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '5',
      title: 'Fura Yhtya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    }
  ];

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