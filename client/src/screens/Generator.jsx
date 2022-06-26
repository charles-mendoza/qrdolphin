import React from 'react';
import {
  HStack,
  Button,
  Text,
  Icon,
  Box,
  Image,
  AspectRatio,
  Slider,
  VStack
} from 'native-base';
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Generator = ({ navigation }) => {
  return (
    <Layout navigation={navigation} p="4">
      <HStack space="4" justifyContent="center">
        <Button leftIcon={<Icon as={Ionicons} name="download-outline" />}>Save</Button>
        <Button leftIcon={<Icon as={Ionicons} name="share-social-outline" />}>Share</Button>
        <Button leftIcon={<Icon as={Ionicons} name="print-outline" />}>Print</Button>
      </HStack>
      <Box p="10">
        <Box borderRadius="10" bg="white" p="2" shadow="4">
          <AspectRatio w="full" ratio={1}>
            <Image size="full" source={require("../assets/qrcode.png")} alt="qrcode" />
          </AspectRatio>
        </Box>
      </Box>
      <VStack mb="10">
        <Slider defaultValue={50} size="lg">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <HStack justifyContent="space-between" mt="1">
          <Text fontSize="xs">Low Quality</Text>
          <Text mt="1" bold>500 x 500 px</Text>
          <Text fontSize="xs">High Quality</Text>
        </HStack>
      </VStack>
      <HStack space="4" justifyContent="center">
        <Button leftIcon={<Icon as={Ionicons} name="color-palette-outline" />}>Color</Button>
        <Button leftIcon={<Icon as={Ionicons} name="happy-outline" />}>Icon</Button>
      </HStack>
    </Layout>
  );
}

export default Generator;
