import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import About from '../screens/Settings/About';
import Theme from '../screens/Settings/Theme';
import History from '../screens/History';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
