import React, { useState } from 'react';

import { View } from 'react-native';

import GlobalApp from '../../components/GlobalApp';

import {
  FilterButtonList
} from './styles';

import { ListProps } from '../MyEvents';

import { TagButton } from '../../components/TagButton';
import { EventCard } from '../../components/EventCard';
import { List, EventCardsList } from '../MyEvents/styles';
import SearchInput from '../../components/SearchInput';
import { Checkbox } from '../../components/Checkbox';


export default function Home() {
  const filter = {
    recent: 'recent',
    popular: 'popular',
    review: 'review',
    proximity: 'proximity',
  }


  const [btnActive, setBtnActive] = useState('');
  const [filterActive, setFilterActive] = useState('all');
  const [checked, setChecked] = useState(false);

  function handleBtnActive(type: string) {
    setBtnActive(type);
  }

  function handleFilterActive(type: string) {
    setFilterActive(type);
  }

  const handleIcon = () => { }

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
      title: 'Bortasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '3',
      title: 'Bortasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '4',
      title: 'Bortasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    },
    {
      id: '5',
      title: 'Bortasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis libero nec vulputate pulvinar. Phasellus purus neque...',
      hourInfo: '16h',
      dateInfo: '06/07/1922',
      paymentInfo: 'Pago',
      isActiveIcon: false,
      handleChangeIcon: handleIcon
    }

  ];

  return (
    <GlobalApp>
      <SearchInput placeholder='Pesquise por evento, local ou interesse' />
      <View>
        <FilterButtonList>
          <TagButton
            textBtn='Mais Recentes'
            isActive={filterActive === filter.recent}
            handleButton={() => handleFilterActive(filter.recent)}
          />
          <TagButton
            textBtn='Mais Populares'
            isActive={filterActive === filter.popular}
            handleButton={() => handleFilterActive(filter.popular)}
          />
          <TagButton
            textBtn='Avaliacao'
            isActive={filterActive === filter.review}
            handleButton={() => handleFilterActive(filter.review)}
          // 
          />
          <TagButton
            textBtn='Proximidade'
            isActive={filterActive === filter.proximity}
            handleButton={() => handleFilterActive(filter.proximity)}
          />
        </FilterButtonList>
      </View>
      <List>
        <EventCardsList
          data={data}
          renderItem={({ item }) =>
            <EventCard
              title={item.title}
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
    </GlobalApp>
  );
}