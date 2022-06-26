import React from 'react';
import { HStack, Button, Icon } from 'native-base';
import Layout from '../components/Layout';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Scanner = ({ navigation }) => {
  return (
    <Layout navigation={navigation} close>
      <QRCodeScanner
        showMarker
        onRead={(e) => navigation.navigate('ScanResult', { title: 'QR Scan Result', data: e.data })}
      />
      <HStack justifyContent="center" space="6" mb="6">
        <Button leftIcon={<Icon as={Ionicons} name="flashlight-outline" size="md" />} />
        <Button leftIcon={<Icon as={Ionicons} name="camera-reverse-outline" size="md" />} />
        <Button leftIcon={<Icon as={Ionicons} name="image-outline" size="md" />} />
      </HStack>
    </Layout>
  );
}

export default Scanner;
