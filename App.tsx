import React from 'react';

import AppLoading from 'expo-app-loading';
import Parse from 'parse/react-native.js';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import { store } from './src/state';

const YOUR_APPLICATION_ID_HERE = process.env.YOUR_APPLICATION_ID_HERE as string;
const YOUR_JAVASCRIPT_KEY_HERE = process.env.YOUR_JAVASCRIPT_KEY_HERE;

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(YOUR_APPLICATION_ID_HERE, YOUR_JAVASCRIPT_KEY_HERE);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}

