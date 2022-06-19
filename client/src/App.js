import React, { useEffect } from 'react';
import {
  Switch,
  useColorMode,
  HStack,
  Text,
  NativeBaseProvider,
  extendTheme,
  theme as nbTheme
} from 'native-base';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.blue,
  }
});

// Color Switch Component for frontend dev purposes
const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack
      space={2}
      alignItems="center"
      pl="4"
      _light={{
        bg: 'white'
      }}
      _dark={{
        bg: 'black'
      }}
    >
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      const iconFontStyles = `@font-face {
          src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')});
          font-family: "Ionicons";
        }`;
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(iconFontStyles));
      document.head.appendChild(style);
    }
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <ToggleDarkMode />
    </NativeBaseProvider>
  );
}

export default App;