import React from 'react';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Routes from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NotificationsRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={Routes.Notifications} />
      <Stack.Screen name="Event" component={Routes.Event} />
      <Stack.Screen name="InviteFriends" component={Routes.InviteFriends} />
      <Stack.Screen name="ConfirmedPeople" component={Routes.ConfirmedPeople} />
    </Stack.Navigator>
  )
};

const CreateEventRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateEvent" component={Routes.CreateEvent} />
      <Stack.Screen name="CreateGiftList" component={Routes.CreateGiftList} />
      <Stack.Screen name="CreateGuest" component={Routes.CreateGuest} />
    </Stack.Navigator>
  )
};

const ProfileRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Routes.Profile} />
      <Stack.Screen name="Event" component={Routes.Event} />
      <Stack.Screen name="InviteFriends" component={Routes.InviteFriends} />
      <Stack.Screen name="ConfirmedPeople" component={Routes.ConfirmedPeople} />
    </Stack.Navigator>
  )
};

const EventsRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Routes.Home} />
      <Stack.Screen name="Event" component={Routes.Event} />
      <Stack.Screen name="InviteFriends" component={Routes.InviteFriends} />
      <Stack.Screen name="ConfirmedPeople" component={Routes.ConfirmedPeople} />
    </Stack.Navigator>
  )
};

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#898D9A',
        tabBarActiveTintColor: '#FF7527',
        tabBarShowLabel: false,
      }}

    >
      <Tab.Screen
        name='EventsRoutes'
        component={EventsRoutes}
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
        name='NotificationsRoutes'
        component={NotificationsRoutes}
        options={{
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <MaterialCommunityIcons
              name='bell'
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
          headerShown: false,
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
        name='ProfileRoutes'
        component={ProfileRoutes}
        options={{
          headerShown: false,
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

