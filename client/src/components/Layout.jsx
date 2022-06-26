import React from 'react';
import { useRoute } from '@react-navigation/native';
import { HStack, ScrollView, Hidden } from 'native-base';
import AppHeader from './headers/AppHeader';
import DesktopHeader from './headers/DesktopHeader';
import GalleryHeader from './headers/GalleryHeader';
import ProfileHeader from './headers/ProfileHeader';
import LeftPanel from './LeftPanel';

const appName = 'QRDolphin';

const Layout = (props) => {
  const route = useRoute();
  return (
    <>
      <Hidden till="md">
        <DesktopHeader title={appName} navigation={props.navigation} />
      </Hidden>
      <Hidden from="md">
        {
          (route.name === 'Gallery')
          && <GalleryHeader title={appName} navigation={props.navigation} />
          || (route.name === 'Palette')
          && <AppHeader title="Create" close />
          || (route.name === 'Profile')
          && <ProfileHeader title={appName} navigation={props.navigation} />
          || (route.name === 'History')
          && <AppHeader title="Scan History" />
          || <AppHeader title={props.title} close={props.close} />
        }
      </Hidden>
      <HStack flex={1}>
        <LeftPanel navigation={props.navigation} />
        <ScrollView minH="100%" _contentContainerStyle={{ p: props.p }} _light={{ bg: "white" }}>
          {props.children}
        </ScrollView>
      </HStack>
    </>
  );
}

export default Layout;
