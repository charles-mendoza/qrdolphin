import React from 'react';
import {
  View,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  TextArea,
  Select
} from 'native-base';
import Layout from '../components/Layout';

const QRForm = (props) => {
  switch(props.type) {
    case 'text':
      return <TextArea h="40" placeholder="Enter Text" size="md" />;
    case 'website':
      return <Input placeholder="Enter URL" size="md" />;
    case 'email':
      return (
        <VStack space="4">
          <Input placeholder="Enter Email" size="md" />
          <Input placeholder="Enter Subject" size="md" />
          <TextArea h="40" placeholder="Enter Message" size="md" />
        </VStack>
      );
    case 'phone':
      return <Input placeholder="Enter Phone Number" size="md" />;
    case 'sms':
      return (
        <VStack space="4">
          <Input placeholder="Enter Phone Number" size="md" />
          <TextArea h="40" placeholder="Enter Message" size="md" />
        </VStack>
      );
    case 'wifi':
      return (
        <VStack space="4">
          <Input placeholder="Enter Wireless SSID" size="md" />
          <Input placeholder="Enter Password" size="md" />
          <Select
            size="md"
            selectedValue=""
            accessibilityLabel="Select Encryption"
            placeholder="Select Encryption"
          >
            <Select.Item label="No Encryption" value="none" />
            <Select.Item label="WEP" value="wep" />
            <Select.Item label="WPA/WPA2" value="wpa" />
          </Select>
        </VStack>
      );
    case 'location':
      return (
        <VStack space="4">
          <Input placeholder="Search Your Address" size="md" />
          <Input placeholder="Latitude" size="md" />
          <Input placeholder="Longitude" size="md" />
        </VStack>
      );
    case 'event':
      return (
        <VStack space="4">
          <Input placeholder="Enter Title" size="md" />
          <Input placeholder="Enter Location" size="md" />
          <Input placeholder="Start Time" size="md" />
          <Input placeholder="End Time" size="md" />
        </VStack>
      );
    case 'crypto':
      return (
        <VStack space="4">
          <Input placeholder="Enter Address" size="md" />
          <Input placeholder="Enter Amount" size="md" />
          <Select
            size="md"
            selectedValue=""
            accessibilityLabel="Select Crypto Currency"
            placeholder="Select Crypto Currency"
          >
            <Select.Item label="Bitcoin" value="bitcoin" />
            <Select.Item label="Bitcoin Cash" value="bitcoin-cash" />
            <Select.Item label="Ethereum" value="ethereum" />
            <Select.Item label="Litecoin" value="litecoin" />
            <Select.Item label="Dash" value="dash" />
          </Select>
        </VStack>
      );
    default:
      return <></>
  }
}

const Editor = ({ route, navigation }) => {
  const { type, title } = route.params;
  return (
    <>
      <Layout navigation={navigation} title={title} p="4">
        <QRForm type={type} title={title} />
      </Layout>
      <View p="4" pb="6" _light={{ bg: 'white' }}>
        <Button
          bottom="0"
          onPress={() => {
            navigation.navigate('Generator');
          }}
        >
          Generate
        </Button>
      </View>
    </>
  );
}

export default Editor;
