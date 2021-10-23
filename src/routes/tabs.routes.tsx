import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import * as Routes from '../pages';
import { Header } from '../components/Header';
import { HeaderHome } from '../pages/Home/HeaderHome';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'CreateEvent';
  switch (routeName) {
    case 'CreateEvent':
      return 'Criar Evento';
    case 'CreateGiftList':
      return 'Sugestões de presentes';
  }
}

const CreateEventRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="CreateEvent" component={Routes.CreateEvent} />
      <Stack.Screen name="CreateGiftList" component={Routes.CreateGiftList} />
    </Stack.Navigator>
  )
}

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#898D9A',
        tabBarActiveTintColor: '#FF7527',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={Routes.Home}
        options={{
          headerShown: true,
          header: props => <HeaderHome />,
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
        name='Seguidores'
        component={Routes.CreateEvent}
        options={{
          header: props => <Header page='Seguidores' />,
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
        name='CreateEventRoutes'
        component={CreateEventRoutes}
        options={({ route }) => ({
          header: (props) => <Header page={getHeaderTitle(route) as string} />,
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ))
        })}
      />
      <Tab.Screen
        name='Profile'
        component={Routes.Profile}
        options={{
          header: (props) => <Header page='Meu Perfil' />,
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
  );
}

