import React from 'react';
import AppLoading from 'expo-app-loading';

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

