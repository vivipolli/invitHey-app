import React from 'react';

import AppLoading from 'expo-app-loading';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { Routes } from './src/routes';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';

const YOUR_APPLICATION_ID_HERE = process.env.YOUR_APPLICATION_ID_HERE as string;
const YOUR_JAVASCRIPT_KEY_HERE = process.env.YOUR_JAVASCRIPT_KEY_HERE;

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(YOUR_APPLICATION_ID_HERE, YOUR_JAVASCRIPT_KEY_HERE);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
    );
  }
}

