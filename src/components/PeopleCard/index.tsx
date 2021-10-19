import React from 'react';

import { View } from 'react-native';

import {
  Card,
  PeopleImage,
  PeopleInfo,
  NickName,
  NormalName
} from './styles';
import { TagButton } from '../TagButton';

export interface Props {
  nickName: string;
  normalName: string;
  buttonTitle: string;
}

export function PeopleCard({ nickName, normalName, buttonTitle }: Props) {
  return (
    <Card>
      {/* <PeopleImage
        source={{ uri: 'https://avatars.githubusercontent.com/u/55644267?v=4' }}
      /> */}
      <PeopleInfo>
        <View>
          <NickName>{nickName}</NickName>
          <NormalName>{normalName}</NormalName>
        </View>
        <TagButton
          textBtn={buttonTitle}
        />
      </PeopleInfo>
    </Card>
  );
}