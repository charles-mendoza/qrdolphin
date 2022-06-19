import React from 'react';
import { HStack, ScrollView, Hidden } from 'native-base';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import LeftPanel from './LeftPanel';

const Layout = ({ navigation, children }) => {
  return (
    <>
      <Hidden till="md">
        <DesktopHeader title="qrdolphin" navigation={navigation} />
      </Hidden>
      <Hidden from="md">
        <MobileHeader title="qrdolphin" />
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
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "white" }}
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
