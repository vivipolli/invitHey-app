import React from 'react';

import { isEmpty } from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../pages';


const Stack = createStackNavigator();

export function Router() {
  const tokenInfo = {};

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isEmpty(tokenInfo) ? (
        <>
          <Stack.Screen name="Welcome" component={Routes.Welcome} />
          <Stack.Screen name="SignIn" component={Routes.SignIn} />
          <Stack.Screen name="SignUp" component={Routes.SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Routes.Welcome} />
        </>
      )}
    </Stack.Navigator>
  );
}

