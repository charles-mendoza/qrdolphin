import React from 'react';
import {
  Box,
  HStack,
  Text,
  Stack,
  Heading,
  AspectRatio,
  Image,
  Center,
  Icon
} from 'native-base';
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SampleItem = () => {
  return (
    <Box m="2" alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={1}>
            <Image size={80} source={require("../assets/qrcode.png")} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "green.600"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Dynamic
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={1}>
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="md">
                QR Code
              </Heading>
              <Icon size="5" as={<Ionicons name="heart" />} />
            </HStack>
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontSize="xs">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

const Gallery = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <SampleItem />
      <SampleItem />
      <SampleItem />
    </Layout>
  );
}

export default Gallery;
