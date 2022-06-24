import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useColorMode } from 'native-base';
import Gallery from '../screens/Gallery';
import Generator from '../screens/Generator';
import Profile from '../screens/Profile';
// import Splash from '../screens/Splash';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';
// import ForgotPassword from '../screens/ForgotPassword';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const {colorMode} = useColorMode();
  return (
    <NavigationContainer theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicon name="qr-code-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Generator"
          component={Generator}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicon name="add-circle-outline" color={color} size={(size * 1.5)} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicon name="person-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
