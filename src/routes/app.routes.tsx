import React from 'react';

import { isEmpty } from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';

const Stack = createStackNavigator();

export function Router() {
  const tokenInfo = {};

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isEmpty(tokenInfo) ? (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
        </>
      )}
    </Stack.Navigator>
  );
}

