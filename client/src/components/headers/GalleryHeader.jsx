import React, { useState } from 'react';
import { HStack, Input, IconButton, Icon } from 'native-base';
import Tab from '../Tab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tabs = [
  'All',
  'Static',
  'Dynamic',
  'Favorites',
]

const GalleryHeader = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <HStack
        py="3"
        space="3"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        _light={{ bg: 'white' }}
      >
        <Input
          flex="1"
          placeholder="Search"
          w="100%"
          h="9"
          borderRadius="10"
          fontSize="16"
          InputLeftElement={
            <Icon ml="3" size="4" as={<Ionicons name="search" />} />
          }
        />
        <IconButton
          p="1"
          icon={<Icon as={MaterialCommunityIcons} name="qrcode-scan" size="6" />}
          onPress={() => {
            navigation.navigate('Scanner')
          }}
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
