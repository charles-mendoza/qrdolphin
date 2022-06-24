import React, { useState } from 'react';
import { HStack, Heading, Pressable, Text, ScrollView, View } from 'native-base';

const tabs = [
  'URL',
  'TEXT',
  'EMAIL',
  'PHONE',
  'SMS',
  'VCARD',
  'MECARD',
  'LOCATION',
  'FACEBOOK',
  'TWITTER',
  'YOUTUBE',
  'WIFI',
  'EVENT',
  'BITCOIN'
];

const Tab = (props) => {
  return (
    <Pressable
      flex={1}
      pt="1" p="2" px="3"
      alignItems="center"
      borderColor="blue.500"
      borderBottomWidth={props.active ? 3 : 0}
      onPress={props.onPress}
    >
      <Text bold={props.active}>{props.title}</Text>
    </Pressable>
  );
}

const GeneratorHeader = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <HStack
        py="4"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        _light={{ bg: 'white' }}
      >
        <Heading fontSize="xl">{props.title}</Heading>
      </HStack>
      <View
        _light={{
          bg: 'white',
          borderBottomColor: 'gray.200',
          borderBottomWidth: 1
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab, i) => {
            return <Tab key={tab} title={tab} onPress={() => setIndex(i)} active={index === i} />
          })}
        </ScrollView>
      </View>
    </>
  );
}

export default GeneratorHeader;
