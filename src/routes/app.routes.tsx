import React, { useEffect, useState } from 'react';

import { isEmpty } from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Parse from 'parse/react-native';

import * as Routes from '../pages';
import { Tabs } from './tabs.routes';

const Stack = createStackNavigator();

export function Router() {
  const [user, setUser] = useState<Parse.User>()


  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser !== null) {
      setUser(currentUser);
      console.info(currentUser);
    }
    return currentUser;
  };

  useEffect(() => {
    getCurrentUser();
  }, []);


  if (isEmpty(user)) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={Routes.SignIn} />
        <Stack.Screen name="SignUp" component={Routes.SignUp} />
      </Stack.Navigator>
    )
  } else {
    return (
      <Tabs />
    )
  }
}

