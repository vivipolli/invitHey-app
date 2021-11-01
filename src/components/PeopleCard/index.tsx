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

interface PeopleCardProps {
  username: string;
  fullname: string;
  avatar?: string;
  buttonTitle: string;
  handleButton: () => void;
}

export function PeopleCard({
  username,
  fullname,
  avatar,
  buttonTitle,
  handleButton
}: PeopleCardProps) {
  return (
    <Card>
      <PeopleImage
        source={{ uri: avatar }}
      />
      <PeopleInfo>
        <View>
          <NickName>{username}</NickName>
          <NormalName>{fullname}</NormalName>
        </View>
        <TagButton
          handleButton={handleButton}
          textBtn={buttonTitle}
        />
      </PeopleInfo>
    </Card>
  );
}