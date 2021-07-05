import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Router } from './app.routes';

export function Routes() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  )
}