import React from "react";
import AppLoading from "expo-app-loading";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Home } from "./src/screens/Home"
import { ThemeProvider } from 'styled-components/native'

import THEME from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
  );
}