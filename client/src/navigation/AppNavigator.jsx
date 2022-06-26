import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorMode } from 'native-base';
import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';
import Palette from '../screens/Palette';
import Editor from '../screens/Editor';
import Generator from '../screens/Generator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {colorMode} = useColorMode();
  return (
    <NavigationContainer theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Root" component={RootNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Palette" component={Palette} />
        <Stack.Screen name="Editor" component={Editor} />
        <Stack.Screen name="Generator" component={Generator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
