import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native';

import Parse from 'parse/react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
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
  MainOption

} from './styles';
import { parsedObject } from '../../utils/parsedObject';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '../../routes/routes.types';
import { Loading } from '../../components/Loading';

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

  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();
  const { eventId }: any = route.params;

  function handleFilterActive(type: string) {
    navigation.navigate("ConfirmedPeople", { inviters: peopleConfirmed })
  }

  const getEvent = async function (): Promise<boolean> {
    const parseQuery: Parse.Query = new Parse.Query('Event');
    const currentUser: UserProps = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = parsedObject(currentUser);
    parseQuery.equalTo('objectId', eventId);


    try {
      let event: Parse.Object[] = await parseQuery.find();
      const eventParsed = JSON.parse(JSON.stringify(event[0]));
      const guestIndex = eventParsed.guests && eventParsed.guests?.findIndex((guest: GuestProps) => guest.objectId === userParsed.objectId) as any;
      console.info(`index ${guestIndex}`)
      const isAcceptedByMe = (guestIndex !== -1 && (guestIndex !== undefined)) ? eventParsed.guests[guestIndex].accepted : false;
      console.info(isAcceptedByMe);
      const peopleConfirmed: GuestProps[] = eventParsed.guests!.filter((guest: any) => guest.accepted);
      setPeopleConfirmed(peopleConfirmed);
      setConfirmed(isAcceptedByMe);
      setEvent(eventParsed);
      setLoading(false);
      return true;
    } catch (error: any) {
      Alert.alert('Error!', error.message);
      return false;
    };
  };

  const handleConfirmEvent = async function (): Promise<boolean> {
    setConfirmed((check) => !check);
    let Event: Parse.Object = new Parse.Object('Event');
    const parseQuery: Parse.Query = new Parse.Query('Event');
    parseQuery.equalTo('objectId', eventId);
    const currentUser: UserProps = await Parse.User.currentAsync() as unknown as UserProps;
    const userParsed = parsedObject(currentUser);

    const guestIndex = event.guests?.findIndex((guest: GuestProps) => guest.objectId === userParsed.objectId) as any;
    const guests: GuestProps[] = event.guests!;
    let newGuests = [...guests];

    if (guestIndex === -1) {
      if (!confirmed) {
        const newGuest: GuestProps = {
          accepted: true,
          ...currentUser,
        }
        newGuests.concat(newGuest);
      }

    } else {
      newGuests[guestIndex] = { ...newGuests[guestIndex], accepted: !newGuests[guestIndex].accepted }
    }
    Event.set('objectId', eventId);
    Event.set('guests', newGuests);
    try {
      const event = await Event.save();
      return true;
    } catch (error) {
      console.info(error)
      return false;
    }
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

          <Modal visible={modalOpen} animationType='slide' transparent={true} >
            <ModalView >
              <ButtonModal onPress={() => setModalOpen(false)} >
                <Icon name={icons.close} />
              </ButtonModal>
              <Main>
                <MainOption onPress={() => { }}>
                  <MainText>Convidar Amigo</MainText>
                  <Icon name={icons.chevronRight} />
                </MainOption>
                <MainOption onPress={() => { }}>
                  <MainText>Compartilhar</MainText>
                  <Icon name={icons.chevronRight} />
                </MainOption>
              </Main>
            </ModalView>
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




