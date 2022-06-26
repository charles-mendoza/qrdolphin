import React from 'react';
import { HStack, Text, IconButton, Icon } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GeneratorHeader = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <HStack
      py="4"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8 }}
      _light={{ bg: 'white' }}
    >
      <HStack alignItems="center" space="4">
        <IconButton
          p="1"
          borderRadius="full"
          icon={
            <Icon
              as={Ionicons}
              size="lg"
              name={props.close ? "close-outline" : "arrow-back-outline"}
              _light={{ color: 'darkText' }}
              _dark={{ color: 'white' }}
            />
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text fontSize="xl">{props.title ? props.title : route.name}</Text>
      </HStack>
    </HStack>
  );
}

export default GeneratorHeader;
