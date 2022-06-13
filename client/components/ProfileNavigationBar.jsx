import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

const ProfileNavigationBar = () => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Appbar.Content title="qrdolphin" />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action icon="menu" color="white" onPress={openMenu} />
        }>
        <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
        <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
        <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
      </Menu>
    </Appbar.Header>
  );
}

export default ProfileNavigationBar;
