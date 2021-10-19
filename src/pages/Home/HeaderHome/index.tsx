import React from 'react';

import { Alert, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Restart } from 'fiction-expo-restart';
import Parse from 'parse/react-native';

import Logo from '../../../assets/images/logoType_small.svg';

import {
  Container
} from './styles';

export function HeaderHome() {
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
    <Container>
      <StatusBar backgroundColor={'#FF7527'} />
      <Logo width={150} height={50} />
      <TouchableOpacity onPress={handleLogOut}>
        <Ionicons name="exit-outline" size={27} color="black" />
      </TouchableOpacity>
    </Container>
  );
}