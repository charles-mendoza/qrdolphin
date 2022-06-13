import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import merge from 'deepmerge';
import { useSelector } from 'react-redux';
import BottomTabNavigation from './navigators/BottomTabNavigation';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const { darkMode } = useSelector((state) => state.themeReducer);
  
  return (
    <PaperProvider theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <BottomTabNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
