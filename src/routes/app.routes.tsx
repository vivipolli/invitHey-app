import React from 'react';

import { isEmpty } from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Routes from '../pages';
import { Tabs } from './tabs.routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function Router() {
  const tokenInfo = { name: 'vivi' };


  if (isEmpty(tokenInfo)) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={Routes.SignUp} />
        <Stack.Screen name="SignIn" component={Routes.SignIn} />
      </Stack.Navigator>
    )
  } else {
    return (
      <Tabs />
    )
  }
}

