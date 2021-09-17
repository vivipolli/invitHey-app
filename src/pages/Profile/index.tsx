import React, { useState } from 'react';

import {
  FlatList,
  View,
  ScrollView
} from 'react-native';

import avatar from '../../assets/images/logo_baloon.jpeg';
import { EventCard } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';
import { TagButton } from '../../components/TagButton';

import { data } from '../MyEvents/index';

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

export default function Profile() {
  const [btnActive, setBtnActive] = useState('');
  const [filterActive, setFilterActive] = useState('all');
  const filter = {
    all: 'all',
    created: 'created',
    participating: 'participating',
    following: 'following',
  }

  function handleBtnActive(type: string) {
    setBtnActive(type);
  }

  function handleFilterActive(type: string) {
    setFilterActive(type);
  }

  return (
    <GlobalComponent>
      <FlexHeader>
        <Avatar source={avatar} />
        <View>
          <TextName>Johnny Cash</TextName>
          <NickName>johnnyejune</NickName>
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
          renderItem={({ item }) =>
            <EventCard
              title={item.title}
              description={item.description}
              hourInfo={item.hourInfo}
              dateInfo={item.dateInfo}
              isActiveIcon={item.isActiveIcon}
              paymentInfo={item.paymentInfo}
            />}
          keyExtractor={item => item.id}
        />

      </View>
    </GlobalComponent >
  );
}