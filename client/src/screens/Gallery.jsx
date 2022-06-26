import React from 'react';
import { VStack } from 'native-base';
import Layout from '../components/Layout';
import QRCodeCard from '../components/QRCodeCard';

const Gallery = ({ navigation }) => {
  return (
    <Layout navigation={navigation} p="4">
      <VStack space="2">
        <QRCodeCard title="QR Code 1" navigation={navigation} dynamic favorite />
        <QRCodeCard title="QR Code 2" navigation={navigation} />
        <QRCodeCard title="QR Code 3" navigation={navigation} dynamic />
        <QRCodeCard title="QR Code 4" navigation={navigation} favorite />
        <QRCodeCard title="QR Code 5" navigation={navigation} dynamic />
        <QRCodeCard title="QR Code 6" navigation={navigation} dynamic favorite />
        <QRCodeCard title="QR Code 7" navigation={navigation} favorite />
      </VStack>
    </Layout>
  );
}

export default Gallery;
