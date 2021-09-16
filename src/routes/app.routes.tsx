import React from 'react';

import { isEmpty } from 'lodash';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Routes from '../pages';
import { Header } from '../components/Header';
import { ThemeProvider } from '../../styled-components';
import { theme } from '../../theme';

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
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#898D9A',
          tabBarActiveTintColor: '#FF7527',
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name='Onboarding'
          component={Routes.Onboarding}
          options={{
            headerShown: false,
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name='home'
                size={size}
                color={color}
              />
            ))
          }}
        />
        <Tab.Screen
          name='SignIn'
          component={Routes.SignIn}
          options={{
            header: props =>
              <ThemeProvider theme={theme}>
                <Header page='Meus Eventos' />
              </ThemeProvider>,
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name='event'
                size={size}
                color={color}
              />
            ))
          }}
        />
        <Tab.Screen
          name='SignUp'
          component={Routes.SignUp}
          options={{
            header: props =>
              <ThemeProvider theme={theme}>
                <Header page='Criar Evento' />
              </ThemeProvider>,
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name='add-circle-outline'
                size={size}
                color={color}
              />
            ))
          }}
        />
        <Tab.Screen
          name='Welcome'
          component={Routes.Welcome}
          options={{
            header: (props) =>
              <ThemeProvider theme={theme}>
                <Header page='Meu Perfil' />
              </ThemeProvider>,
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name='person-outline'
                size={size}
                color={color}
              />
            ))
          }}
        />
      </Tab.Navigator>
    )
  }
}

