import React from 'react';
import { Stack, Pressable, Heading, Text } from 'native-base';
import Layout from '../components/Layout';

const QRCodeHistoryCard = (props) => {
  return (
    <Pressable
      p="4" pb="2"
      borderRadius="10"
      shadow="4"
      _light={{
        bg: 'white',
        _pressed: { bg: 'gray.100' }
      }}
      _dark={{
        bg: 'gray.700',
        _pressed: { bg: 'gray.800' }
      }}
      onPress={props.onPress}
    >
      <Heading fontSize="sm">{props.title}</Heading>
      <Text fontSize="xs">{props.data}</Text>
      <Text alignSelf="flex-end" fontSize="xs">2022-06-26 03:21:03</Text>
    </Pressable>
  );
}

const History = ({ navigation }) => {
  return (
    <Layout navigation={navigation} p="4">
      <Stack space="4">
        <QRCodeHistoryCard title="QR Code" data="qrdolphin" />
        <QRCodeHistoryCard title="QR Code" data="qrdolphin" />
      </Stack>
    </Layout>
  );
}

export default History;
