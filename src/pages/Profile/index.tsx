import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import Parse from 'parse/react-native';
import * as ImagePicker from 'expo-image-picker';

import { EventCard, EventCardProps } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';
import { TagButton } from '../../components/TagButton';

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
import { UserProps } from '../CreateGuest';
import { parsedObject } from '../../utils/parsedObject';
import { refresh } from '../../utils/refresh';

export default function Profile() {
  const [btnActive, setBtnActive] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState({
    username: '',
    fullname: '',
    avatar: {
      url: '',
    },
    objectId: '',
  });
  const [filterActive, setFilterActive] = useState('all');
  const [data, setData] = useState([] as EventCardProps[]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refresh(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, nós precisamos da permissão da câmera para funcionar');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      const base64: string = result.base64 as string;
      setImage('data:image/jpeg;base64,' + base64);

      let User: Parse.User = new Parse.User();
      const parseFile = new Parse.File("avatar.jpg", { base64 });
      try {
        const responseFile = await parseFile.save();
        User.set('objectId', user.objectId);
        User.set('avatar', responseFile);
        await User.save();
      } catch (error: any) {
        console.error('Error', error);
      }
    }

  };

  const filter = {
    all: 'all',
    created: 'created',
    participating: 'participating',
    following: 'following',
  }

  function handleBtnActive(type: string) {
    setBtnActive(type);
  }

  const getInitialData = async function () {
    const currentUser = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = JSON.parse(JSON.stringify(currentUser));
    currentUser && setUser(userParsed);

    setImage(userParsed.avatar?.url);

    const parseQuery: Parse.Query = new Parse.Query('Event');
    try {
      let all = await parseQuery.find() as unknown as EventCardProps[];
      setData(all);
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  }

  useEffect(() => {
    getInitialData();
  }, []);

  const handleFilterActive = async function (type: string): Promise<Boolean> {
    setFilterActive(type);
    const query: Parse.Query = new Parse.Query('Event');

    try {
      let events = await query.find() as unknown as EventCardProps[];
      if (type === 'all') {
        setData(events);
      } else if (type === 'created') {
        query.equalTo('owner', user.username);
        return await query
          .find()
          .then(async (myEvents: any) => {
            setData(myEvents);
            return true;
          })
          .catch((error: any) => {
            Alert.alert('Error!', error.message);
            return false;
          });

      } else {
        //participating
        const eventsParsed = JSON.parse(JSON.stringify(events));
        const participating = eventsParsed.filter((event: any) => event.guests.filter((guest: any) => guest.username === user.username));
        setData(participating);
      }

      return true;
    } catch (error: any) {
      console.info(error);
      return false;
    };

  };

  return (
    <GlobalComponent route="Profile">
      <Container>
        <FlexHeader>
          <TouchableOpacity onPress={pickImage}>
            <Avatar source={{ uri: image }} />
          </TouchableOpacity>
          <View>
            <TextName>{user.fullname}</TextName>
            <NickName>{user.username}</NickName>
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
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({ item }) => {
              const event = JSON.parse(JSON.stringify(item))
              return (
                <EventCard
                  title={event.name}
                  datetime={event.datetime}
                  eventId={event.objectId}
                  banner={event.banner?.url}
                  uf={event.address.state}
                  city={event.address.city}
                />
              )
            }
            }
            keyExtractor={(item, index) => { return parsedObject(item).objectId }}
          />

        </View>
      </Container>
    </GlobalComponent >
  );
}