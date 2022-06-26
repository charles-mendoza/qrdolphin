import './ignoreWarnings';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NativeBaseProvider, extendTheme, theme as nbTheme } from 'native-base';
import AppNavigator from './navigation/AppNavigator';

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.blue,
  }
});

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      const iconFontStyles = `@font-face {
          src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')});
          font-family: "Ionicons";
        }
        @font-face {
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')});
          font-family: "MaterialCommunityIcons";
        }`;
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(iconFontStyles));
      document.head.appendChild(style);
    }
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App;