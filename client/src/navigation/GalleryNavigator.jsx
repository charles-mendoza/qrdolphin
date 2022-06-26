import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gallery from '../screens/Gallery';
import Scanner from '../screens/Scanner';
import ScanResult from '../screens/ScanResult';
import QRCode from '../screens/QRCode';

const Stack = createNativeStackNavigator();

const GalleryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Gallery"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="ScanResult" component={ScanResult} />
      <Stack.Screen name="QRCode" component={QRCode} />
    </Stack.Navigator>
  );
}

export default GalleryNavigator;
