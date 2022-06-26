import React from 'react';
import { Pressable, Text } from 'native-base';

const Tab = (props) => {
  return (
    <Pressable
      flex={1}
      p="1" pb="2"
      alignItems="center"
      borderColor="blue.500"
      borderBottomWidth={props.active ? 3 : 0}
      onPress={props.onPress}
    >
      <Text bold={props.active}>{props.title}</Text>
    </Pressable>
  );
}

export default Tab;
