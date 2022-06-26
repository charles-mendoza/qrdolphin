import React from 'react';
import { VStack } from 'native-base';
import PressableRow from '../../components/PressableRow';
import Layout from '../../components/Layout';

const Settings = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <VStack mb="4">
        {/* <PressableRow title="Notifications" leftIcon="notifications-outline" />
        <PressableRow title="Help" leftIcon="help-buoy-outline" /> */}
        <PressableRow title="About" leftIcon="information-circle-outline" onPress={() => navigation.navigate('About')} />
        <PressableRow title="Theme" leftIcon="color-palette-outline" onPress={() => navigation.navigate('Theme')} />
      </VStack>
      <PressableRow title="Log out" color="blue.500" />
      <PressableRow title="Delete account" color="danger.500" />
    </Layout>
  );
}

export default Settings;
