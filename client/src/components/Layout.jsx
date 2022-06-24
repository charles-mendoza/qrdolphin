import React from 'react';
import { useRoute } from '@react-navigation/native';
import { HStack, ScrollView, Hidden } from 'native-base';
import DesktopHeader from './DesktopHeader';
import GalleryHeader from './GalleryHeader';
import GeneratorHeader from './GeneratorHeader';
import ProfileHeader from './ProfileHeader';
import LeftPanel from './LeftPanel';

const Layout = ({ navigation, children }) => {
  const route = useRoute();
  return (
    <>
      <Hidden till="md">
        <DesktopHeader title="qrdolphin" navigation={navigation} />
      </Hidden>
      <Hidden from="md">
        {
          (route.name === 'Gallery')
          && <GalleryHeader title="qrdolphin" />
          || (route.name === 'Generator')
          && <GeneratorHeader title="qrdolphin" />
          || (route.name === 'Profile')
          && <ProfileHeader title="qrdolphin" />
        }
      </Hidden>
      <HStack flex={1}>
        <LeftPanel navigation={navigation} />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
          p={{ base: 4, md: 8 }}
          _android={{
            contentContainerStyle: {
              justifyContent: "center"
            }
          }}
          _ios={{
            contentContainerStyle: {
              justifyContent: "center"
            }
          }}
        >
          {children}
        </ScrollView>
      </HStack>
    </>
  );
}

export default Layout;
