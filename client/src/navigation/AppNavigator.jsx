import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Gallery from '../screens/Gallery';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Splash" component={Splash} options={{ title: '' }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
