import React from 'react';
import { StatusBar  as ExpoStatusBar} from 'expo-status-bar';
import { RestaurantScreen } from './src/features/resturants/screens/Restaurants.screens';
import { ThemeProvider } from 'styled-components/native';
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'; 
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'; 
import { theme } from './src/infrastructure/theme';
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular ,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular ,
  });
  if(!oswaldLoaded || !latoLoaded){
    return null 
  }

  return (
    <>
    <ThemeProvider theme={theme}>
     <RestaurantScreen />
    </ThemeProvider>
     <ExpoStatusBar style='auto' />
    </>
  );
}
