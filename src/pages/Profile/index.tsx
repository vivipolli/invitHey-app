import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
  RefreshControl,
  Modal,
  TouchableOpacityBase,
} from 'react-native';

import { TextInput } from 'react-native-paper';

import Parse from 'parse/react-native';
import * as ImagePicker from 'expo-image-picker';
import { Restart } from 'fiction-expo-restart';

import { EventCard, EventCardProps } from '../../components/EventCard';
import GlobalComponent from '../../components/GlobalApp';
import { TagButton } from '../../components/TagButton';
import avatarDefault from '../../assets/images/avatar.png';

import {
  Avatar,
  Container,
  NickName,
  TextName,
  FlexRow,
  LargeTitle,
  ListSpace,
  FlexHeader,
  ButtonModal,
  Icon,
  TextBio,
  ModalIcon,
  InfoText,
  HeaderCheckIcon,
  HeaderBio
} from './styles';
import { UserProps } from '../CreateGuest';
import { parsedObject } from '../../utils/parsedObject';
import { refresh } from '../../utils/refresh';
import { List } from '../Home/styles';
import { EventProps } from '../Event';
import { InviteProps } from '../Notifications';
import { Loading } from '../../components/Loading';
import { userPointer } from '../../utils/pointers';
import { Main, MainOption, MainText, ModalContainer, ModalView } from '../Event/styles';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../state/types/user.types';
import { State } from '../../state/types/general.types';
import { currentUserAction } from '../../state/actions/user.action';

export default function Profile() {
  const [btnActive, setBtnActive] = useState('');
  const [image, setImage] = useState('');

  const [filterActive, setFilterActive] = useState('created');
  const [data, setData] = useState([] as EventCardProps[]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listLoading, setListLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [openBio, setOpenBio] = useState(false);
  const [bio, setBio] = useState('');

  const user: UserInfo = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

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
        console.info(responseFile);
        await User.save();
        setModalOpen(false);
        dispatch(currentUserAction({ ...user, avatar: responseFile }));
      } catch (error: any) {
        console.error('Error', error);
      }
    }
  };

  const EditBio = async () => {
    let User: Parse.User = new Parse.User();
    try {
      User.set('objectId', user.objectId);
      User.set('bio', bio);
      await User.save();
      dispatch(currentUserAction({ ...user, bio }));
      setOpenBio(false);
    } catch (error: any) {
      console.error('Error', error);
    }
  };

  const filter = {
    created: 'created',
    participating: 'participating',
    following: 'following',
  }

  const getInitialData = async function () {
    setImage(user.avatar?.url);

    const query: Parse.Query = new Parse.Query('Event');
    try {
      query.equalTo('owner', user.username);
      return await query
        .find()
        .then(async (myEvents: any) => {
          setData(myEvents);
          return true;
        })
        .catch((error: any) => {
          return false;
        });
    } catch (error: any) {
      return false;
    } finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    getInitialData();
  }, []);

  const handleFilterActive = async function (type: string): Promise<Boolean> {
    setListLoading(true);
    setFilterActive(type);
    const query: Parse.Query = new Parse.Query('Event');
    const invite: Parse.Query = new Parse.Query('Invite');

    try {
      if (type === 'created') {
        query.equalTo('owner', user.username);
        return await query
          .find()
          .then(async (myEvents: any) => {
            setData(parsedObject(myEvents));
            return true;
          })
          .catch((error: any) => {
            Alert.alert('Error!', error.message);
            return false;
          });

      } else if (type === 'participating') {
        invite.equalTo('user', userPointer(user.objectId));
        return await invite
          .find()
          .then(async (invites: any) => {
            const invitesParsed = parsedObject(invites);
            const participating = invitesParsed.filter((invite: InviteProps) => invite.accepted);
            setData(participating);
            return true;
          })
          .catch((error: any) => {
            Alert.alert('Error!', error.message);
            return false;
          });
      }
      return true;
    } catch (error: any) {
      console.info(error);
      return false;
    } finally {
      setListLoading(false);
    };
  };

  const signOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        const currentUser = await Parse.User.currentAsync();
        Restart();
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      })
  };

  const handleLogOut = async function () {
    Alert.alert('Logout', 'Deseja sair do InvitHey?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        },
      ]);
  };

  return (
    <GlobalComponent route="Profile">
      {loading ? <Loading /> :
        <Container>
          <FlexHeader>
            <Avatar source={image ? { uri: image } : avatarDefault} />
            <View>
              <TextName>{user.fullname}</TextName>
              <NickName>{user.username}</NickName>
            </View>
            <ButtonModal onPress={() => setModalOpen((open) => !open)}>
              <Icon size={25} name="more-vert" />
            </ButtonModal>
          </FlexHeader>
          <TextBio>{user?.bio}</TextBio>

          {/* <FlexRow>
          <TagButton
            isActive={btnActive === 'followers'}
            handleButton={() => handleBtnActive('followers')}
            textBtn="Seguidores (530)" />
          <TagButton
            isActive={btnActive === 'following'}
            handleButton={() => handleBtnActive('following')}
            textBtn="Seguindo (240)" />
        </FlexRow> */}
          <LargeTitle>
            Meus Eventos
          </LargeTitle>

          <FlexRow>
            <ScrollView horizontal>
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

              {/* <TagButton
              isActive={filterActive === filter.following}
              handleButton={() => handleFilterActive(filter.following)}
              textBtn="Favoritos" /> */}
            </ScrollView>
          </FlexRow>

          {listLoading ? <Loading /> :
            <List>
              <FlatList
                data={data}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item }) => {
                  const parsedData = parsedObject(item);
                  const event = filterActive === filter.participating ? parsedData.event : parsedData;
                  return (
                    <EventCard
                      title={event?.name}
                      datetime={event?.datetime}
                      eventId={event?.objectId}
                      banner={event?.banner?.url}
                      uf={event?.address?.state}
                      city={event?.address?.city}
                    />
                  )
                }
                }
                keyExtractor={(item, index) => { return parsedObject(item).objectId }}
              />
            </List>
          }
        </Container>
      }
      <Modal visible={modalOpen} animationType='fade' transparent={true} >
        <ModalContainer>
          <ModalView >
            <TouchableOpacity onPress={() => setModalOpen(false)} >
              <ModalIcon name="close" />
            </TouchableOpacity>
            <Main>
              <MainOption onPress={pickImage}>
                {/* <ModalIcon name="person" /> */}
                <MainText>Avatar</MainText>
                <InfoText>Adicionar/editar</InfoText>
                <ModalIcon name="chevron-right" />
              </MainOption>
              <MainOption onPress={() => {
                setOpenBio(true);
                setModalOpen(false);
              }}>
                {/* <ModalIcon name="edit" /> */}
                <MainText>Bio</MainText>
                <InfoText>Adicionar/editar</InfoText>
                <ModalIcon name="chevron-right" />
              </MainOption>
              <MainOption onPress={handleLogOut}>
                {/* <ModalIcon name="logout" /> */}
                <MainText>Logout</MainText>
                <InfoText>Sair da conta</InfoText>
                <ModalIcon name="chevron-right" />
              </MainOption>
            </Main>
          </ModalView>
        </ModalContainer>
      </Modal>
      <Modal visible={openBio} animationType='fade' transparent={false} >
        <HeaderBio>
          <TouchableOpacity onPress={() => setOpenBio(false)}>
            <ModalIcon size={30} name="close" />
          </TouchableOpacity>
          <TouchableOpacity onPress={EditBio}>
            <HeaderCheckIcon size={30} name="check" />
          </TouchableOpacity>

        </HeaderBio>
        <TextInput
          placeholder="Conte mais sobre você"
          numberOfLines={2}
          multiline
          defaultValue={user?.bio}
          onChangeText={(text) => setBio(text)}
          style={{ backgroundColor: '#fff' }}
          theme={{ colors: { primary: '#FF7527', text: 'gray' }, }}
          right={<TextInput.Affix text="/100" />} onPressIn={undefined} onPressOut={undefined} />
      </Modal>
    </GlobalComponent >
  );
}