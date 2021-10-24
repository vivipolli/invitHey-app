import React, { useState } from 'react';

import { TouchableOpacity, View } from 'react-native';
import GlobalComponent from '../../components/GlobalApp';
import avatar from '../../assets/images/logo_baloon.jpeg';
import { Avatar, FlexRow, NickName, TextName } from '../Profile/styles';
import { PeopleCard } from '../../components/PeopleCard';
import { TagButton } from '../../components/TagButton';


import {
  Header,
  Menu,
  User,
  PeopleCardList
} from './styles';

export interface PeopleCardListProps {
  id: string
  nickName: string;
  normalName: string;
  buttonTitle: string;
}


export const data: PeopleCardListProps[] = [
  {
    id: '1',
    nickName: 'eubryan',
    normalName: 'Bryan',
    buttonTitle: 'Remover'
  },
  {
    id: '2',
    nickName: 'eubryan',
    normalName: 'Bryan',
    buttonTitle: 'Remover'
  },
  {
    id: '3',
    nickName: 'eubryan',
    normalName: 'Bryan',
    buttonTitle: 'Remover'
  },
];

export function Followers() {

  const [btnActive, setBtnActive] = useState('');

  // Button
  function handleBtnActive(type: string) {
    setBtnActive(type);
  }

  // Auxiliares
  const aux = {
    numbers: {
      followers: '560',
      following: '200'
    }
  }


  return (
    <GlobalComponent>
      <Header>
        <User>
          <Avatar source={avatar} />
          <View>
            <TextName>Johnny Cash</TextName>
            <NickName>johnnyejune</NickName>
          </View>
        </User>
        <TouchableOpacity onPress={() => { }}>
          <Menu name='menu' />
        </TouchableOpacity>
      </Header>
      <FlexRow>
        <TagButton
          isActive={btnActive === 'followers'}
          handleButton={() => handleBtnActive('followers')}
          textBtn={`Seguidores (${aux.numbers.followers})`}
        />
        <TagButton
          isActive={btnActive === 'following'}
          handleButton={() => handleBtnActive('following')}
          textBtn={`Seguindo (${aux.numbers.following})`}
        />
      </FlexRow>
      <PeopleCardList
        data={data}
        renderItem={({ item }) =>
          <PeopleCard
            nickName={item.nickName}
            normalName={item.normalName}
            buttonTitle={item.buttonTitle}
            handleButton={() => {}}
          />}
        keyExtractor={item => item.id}
      />
    </GlobalComponent>
  );
}




