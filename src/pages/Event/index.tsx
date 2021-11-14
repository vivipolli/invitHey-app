import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native';

import Parse from 'parse/react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Button } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

import GlobalComponent from '../../components/GlobalApp';
import { TagButton } from '../../components/TagButton';
import logo from '../../assets/images/logo_baloon.jpeg'

import {
  BackgroundImage,
  ConfirmArea,
  ConfirmText,
  Container,
  Done,
  Favorite,
  Separator,
  FavoriteButton,
  ModalView,
  Header,
  Title,
  Icon,
  ButtonModal,
  CreatedBy,
  Data,
  DataInfo,
  DataIcon,
  LocalDescription,
  Buttons,
  Description,
  EventDescription,
  GeneralInfo,
  MainText,
  Main,
  MainOption,
  ModalContainer

} from './styles';
import { parsedObject } from '../../utils/parsedObject';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../../routes/routes.types';
import { Loading } from '../../components/Loading';
import { userPointer } from '../../utils/pointers';
import BottomModal from '../../components/Modal';

const icons = {
  calendar: 'calendar-today',
  clock: 'access-time',
  usd: 'attach-money',
  favorite: 'favorite',
  done: 'done',
  moreVert: 'more-vert',
  local: 'pin-drop',
  chevronRight: 'chevron-right',
  close: 'close'
}

type Address = {
  cep: string,
  state: string,
  city: string,
  street: string,
  number: string,
}

export type EventProps = {
  name: string,
  banner?: any,
  datetime: string,
  eventId: string,
  address: Address,
  owner: string,
  type?: string,
  description: string,
  guests?: GuestProps[],
}

type GuestProps = {
  accepted: boolean,
  username: string,
  objectId: string,
  fullname: string;
  avatar: any;
}

interface UserProps {
  objectId: string;
  username: string;
  fullname: string;
  avatar: any;
}

export function Event() {
  const [modalOpen, setModalOpen] = useState(false);
  const [event, setEvent] = useState({} as EventProps);
  const [filterActive, setFilterActive] = useState('all');
  const [peopleConfirmed, setPeopleConfirmed] = useState([] as GuestProps[]);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [inviteId, setInviteId] = useState('');
  const [user, setUser] = useState({} as UserProps);

  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();

  const { eventId }: any = route.params;

  console.info(eventId);

  const eventPointer = {
    __type: 'Pointer',
    className: 'Event',
    objectId: eventId,
  }

  function handleFilterActive(type: string) {
    navigation.navigate("ConfirmedPeople", { inviters: peopleConfirmed })
  }

  function myCurrentEvent(invites: any) {
    const invitesParsed = parsedObject(invites);
    const invite = invitesParsed.find((invite: any) => invite.event.objectId === eventId);
    return invite;
  }

  const getEvent = async function (): Promise<boolean> {
    const parseQuery: Parse.Query = new Parse.Query('Event');
    parseQuery.equalTo('objectId', eventId);

    const currentUser: UserProps = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = parsedObject(currentUser);
    setUser(userParsed);

    try {
      let event: Parse.Object[] = await parseQuery.find();
      const eventParsed = parsedObject(event[0]);

      const userInviteQuery: Parse.Query = new Parse.Query('Invite');

      userInviteQuery.equalTo('user', userPointer(user.objectId));

      await userInviteQuery
        .find()
        .then(async (invites: any) => {
          const invite = myCurrentEvent(invites);
          if (invite && invite.accepted) {
            setConfirmed(true);
            setInviteId(invite.objectId);
          } else {
            setConfirmed(false);
            setInviteId(invite?.objectId);
          }
        });

      const peopleInviteQuery: Parse.Query = new Parse.Query('Invite');
      peopleInviteQuery.equalTo('event', eventPointer);

      await peopleInviteQuery
        .find()
        .then(async (invites: any) => {
          const inviteParsed = parsedObject(invites);
          const inviters = inviteParsed.filter((invite: any) => invite.accepted);

          const usersAcceppted = inviters.map((invite: any) => invite.user);
          setPeopleConfirmed(usersAcceppted);
        }).catch((err) => console.info(err))

      setEvent(eventParsed);
      setLoading(false);
      return true;

    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  };

  const acceptInvite = async function () {
    let Invite: Parse.Object = new Parse.Object('Invite');
    const inviteQuery: Parse.Query = new Parse.Query('Invite');
    inviteQuery.equalTo('user', userPointer(user.objectId));

    if (inviteId) {
      Invite.set('objectId', inviteId);
      Invite.set('accepted', !confirmed);
      try {
        await Invite.save();
        return true;
      } catch (error) {
        console.info(error)
        return false;
      }
    } else {
      Invite.set('accepted', true);
      Invite.set('user', userPointer(user.objectId));
      Invite.set('event', eventPointer);
      Invite.set('inviteBy', 'self');
      await Invite.save().then(() => { return true }).catch((error) => Alert.alert('Error!', error.message));
    }
  }

  const handleConfirmEvent = () => {
    setConfirmed((check) => !check);
    acceptInvite();
  }

  useEffect(() => {
    getEvent();
  }, [confirmed]);


  return (
    <GlobalComponent route="Event">
      {loading ? <Loading /> :
        <>
          <Container>
            <BackgroundImage source={{ uri: event.banner?.url }} />
            <Separator>
              <ConfirmArea onPress={handleConfirmEvent} activeOpacity={0.7} >
                <ConfirmText>{confirmed ? "Confirmado" : "Vou"} </ConfirmText>
                {confirmed && <Done name={icons.done} />}
              </ConfirmArea>
              <FavoriteButton>
                <Favorite name={icons.favorite} />
              </FavoriteButton>
            </Separator>
          </Container>
          <GeneralInfo>
            <Header>
              <View>
                <Title>{event?.name}</Title>
                <CreatedBy>{event?.owner}</CreatedBy>
              </View>
              <ButtonModal onPress={() => setModalOpen(true)} >
                <Icon name={icons.moreVert} />
              </ButtonModal>
            </Header>

            <View style={styles.view}>
              <Data>
                <DataIcon name={icons.calendar} />
                <DataInfo>{moment(event.datetime).format('LLLL')}</DataInfo>
              </Data>
            </View>
            <View style={styles.view}>
              <DataIcon name={icons.local} />
              <LocalDescription>{
                `${event?.address?.cep} - ${event?.address?.street} - ${event?.address?.number} -${event?.address?.city} / ${event?.address?.state}
          `}
              </LocalDescription>
            </View>

            <Buttons>
              <TagButton
                textBtn={`${peopleConfirmed.length} Confirmados`}
                isActive={filterActive === 'confirmed'}
                handleButton={() => handleFilterActive('confirmed')}
              />
              {/* <TagButton
            textBtn='560 Seguidores'
            isActive={filterActive === 'followers'}
            handleButton={() => handleFilterActive('followers')}
          /> */}
            </Buttons>
            <Description>
              <EventDescription>{event?.description}</EventDescription>
            </Description>
          </GeneralInfo>

          <Modal visible={modalOpen} animationType='fade' transparent={true} >
            <ModalContainer>
              <ModalView >
                <ButtonModal onPress={() => setModalOpen(false)} >
                  <Icon name={icons.close} />
                </ButtonModal>
                <Main>
                  <MainOption
                     onPress={
                       () => navigation.navigate("InviteFriends", { peopleConfirmed: peopleConfirmed, event, currentUser: user })}>
                    <MainText>Convidar Amigo</MainText>
                    <Icon name={icons.chevronRight} />
                  </MainOption>
                  <MainOption onPress={() => { }}>
                    <MainText>Compartilhar</MainText>
                    <Icon name={icons.chevronRight} />
                  </MainOption>
                </Main>
              </ModalView>
            </ModalContainer>
          </Modal>
        </>
      }
    </GlobalComponent>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  }
})




