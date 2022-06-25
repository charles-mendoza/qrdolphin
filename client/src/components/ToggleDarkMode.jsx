import React from 'react';
import { Switch, useColorMode, HStack, Text } from 'native-base';

const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack
      pl="4"
      space="2"
      alignItems="center"
      _light={{ bg: 'white' }}
      _dark={{ bg: 'black' }}
    >
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default ToggleDarkMode;
