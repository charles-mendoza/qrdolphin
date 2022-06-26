import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GalleryNavigator from './GalleryNavigator';
import ProfileNavigator from './ProfileNavigator';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Placeholder = () => <></>;

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="GalleryRoot"
        component={GalleryNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="qr-code-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GeneratorRoot"
        component={Placeholder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="add-circle-outline" color={color} size={(size * 1.5)} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Palette');
          },
        })}
      />
      <Tab.Screen
        name="ProfileRoot"
        component={ProfileNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
