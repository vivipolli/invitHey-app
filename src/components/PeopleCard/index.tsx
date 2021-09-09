import React from 'react';
import { Button } from './Button';

import { View } from 'react-native';

import { 
    Card, 
    PeopleImage,
    PeopleInfo,
    NickName,
    NormalName 
} from './styles';

interface Props {
    nickName: string;
    normalName: string;
}

export function PeopleCard( { nickName, normalName }: Props ) {
    return(
        <Card>
            <PeopleImage 
                source={{uri: 'https://avatars.githubusercontent.com/u/55644267?v=4'}}
            />
            <PeopleInfo>
                <View>
                    <NickName>{nickName}</NickName>
                    <NormalName>{normalName}</NormalName>
                </View>
                <Button 
                    textBtn='Texto'
                />
            </PeopleInfo>
        </Card>
    );
}