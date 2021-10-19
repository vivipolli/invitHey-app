import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../pages';
import { Header } from '../components/Header';
import { HeaderHome } from '../pages/Home/HeaderHome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const CreateEventRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateEvent" component={Routes.CreateEvent} />
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
          header: props =>  <HeaderHome />,
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
          header: props =>  <Header page='Seguidores' />,
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
        options={{
          header: props => <Header page={props.route.name} />,
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

