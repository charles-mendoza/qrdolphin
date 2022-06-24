import React, { useState } from 'react';
import { Pressable, HStack, Input, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tabs = [
  'All',
  'Static',
  'Dynamic',
  'Favorites',
]

const QRFilter = (props) => {
  return (
    <Pressable
      borderBottomWidth={props.active ? 3 : 0}
      borderColor="blue.500"
      flex={1}
      alignItems="center"
      p="1"
      onPress={props.onPress}
    >
      <Text>{props.title}</Text>
    </Pressable>
  );
}

const GalleryHeader = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <HStack
        py="3"
        space="4"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
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
      >
        {tabs.map((tab, i) => {
          return <QRFilter key={tab} title={tab} onPress={() => setIndex(i)} active={index === i} />
        })}
      </HStack>
    </>
  );
}

export default GalleryHeader;
