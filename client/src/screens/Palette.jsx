import React from 'react';
import { Pressable, Box, Center, Text, Icon } from 'native-base'; 
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const qrTypes = [
  {
    key: 'text',
    title: 'Text',
    icon: 'text-outline'
  },
  {
    key: 'website',
    title: 'Website',
    icon: 'link-outline'
  },
  {
    key: 'email',
    title: 'Email',
    icon: 'mail-outline'
  },
  {
    key: 'phone',
    title: 'Phone',
    icon: 'call-outline'
  },
  {
    key: 'sms',
    title: 'SMS',
    icon: 'chatbox-ellipses-outline'
  },
  {
    key: 'wifi',
    title: 'WiFi',
    icon: 'wifi-outline'
  },
  {
    key: 'location',
    title: 'Location',
    icon: 'location-outline'
  },
  {
    key: 'event',
    title: 'Event',
    icon: 'calendar-outline'
  },
  {
    key: 'crypto',
    title: 'Crypto',
    icon: 'logo-bitcoin'
  }
];

const PaletteItem = (props) => {
  return (
    <Pressable
      {...props}
      pt="6" pb="4"
      bg="blue.600"
      borderRadius="10"
      shadow="4"
      _pressed={{ bg: 'blue.800' }}
      onPress={props.onPress}
    >
      <Center>
        <Icon as={Ionicons} name={props.icon} color="white" size="lg" mb="2" />
        <Text color="white" fontSize="xs">{props.title}</Text>
      </Center>
    </Pressable>
  );
}

const Palette = ({ navigation }) => {
  return (
    <Layout navigation={navigation} p="4">
      <Box
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
      >
        {qrTypes.map((item) => {
          return (
            <PaletteItem
              w="1/4" m="2"
              key={item.key}
              title={item.title}
              icon={item.icon}
              onPress={() => {
                navigation.navigate('Editor', { type: item.key, title: item.title });
              }}
            />
          );
        })}
      </Box>
    </Layout>
  );
}

export default Palette;
