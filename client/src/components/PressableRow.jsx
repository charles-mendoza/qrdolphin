import React from 'react';
import { Pressable, HStack, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PressableRow = (props) => {
  return (
    <Pressable
      p="2" px="4"
      _light={{
        _pressed: { bg: 'gray.100' }
      }}
      _dark={{
        _pressed: { bg: 'gray.800' }
      }}
      onPress={props.onPress}
    >
      <HStack justifyContent="space-between">
        <HStack space="2">
          {props.leftIcon && <Icon as={Ionicons} name={props.leftIcon} size="lg" color={props.color} /> }
          <Text color={props.color}>{props.title}</Text>
        </HStack>
        {props.rightIcon && <Icon as={Ionicons} name={props.rightIcon} size="lg" color={props.color} /> }
      </HStack>
    </Pressable>
  );
}

export default PressableRow;
