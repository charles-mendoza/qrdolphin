import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Profile from '../screens/Profile';
import HomeNavigationBar from '../components/HomeNavigationBar';
import GalleryNavigationBar from '../components/GalleryNavigationBar';
import ProfileNavigationBar from '../components/ProfileNavigationBar';

const BottomTabNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home-outline' },
    { key: 'gallery', title: 'Gallery', icon: 'qrcode' },
    { key: 'profile', title: 'Profile', icon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    gallery: Gallery,
    profile: Profile,
  });

  return (
    <>
      {
        (index === 0)
        ? <HomeNavigationBar />
        : (index === 1)
        ? <GalleryNavigationBar />
        : (index === 2)
        ? <ProfileNavigationBar />
        : <></>
      }
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
      />
    </>
  );
}

export default BottomTabNavigator;
