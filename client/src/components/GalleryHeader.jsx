import React, { useState } from 'react';
import { Pressable, HStack, Input, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tabs = [
  'All',
  'Static',
  'Dynamic',
  'Favorites',
]

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

const GalleryHeader = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <HStack
        py="3"
        alignItems="center"
        px={{ base: 4, md: 8 }}
        _light={{ bg: 'white' }}
      >
        <Input
          placeholder="Search"
          width="100%"
          height="9"
          borderRadius="10"
          fontSize="16"
          InputLeftElement={
            <Icon ml="3" size="4" as={<Ionicons name="search" />} />
          }
        />
      </HStack>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        _light={{
          bg: 'white',
          borderBottomColor: 'gray.200',
          borderBottomWidth: 1
        }}
      >
        {tabs.map((tab, i) => {
          return <Tab key={tab} title={tab} onPress={() => setIndex(i)} active={index === i} />
        })}
      </HStack>
    </>
  );
}

export default GalleryHeader;
