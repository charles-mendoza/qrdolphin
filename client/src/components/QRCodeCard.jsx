import React, { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  Stack,
  Heading,
  AspectRatio,
  Image,
  Center,
  Icon,
  IconButton,
  Pressable
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QRCodeCard = (props) => {
  const [favorite, setFavorite] = useState(props.favorite);
  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate('QRCode', {
          title: props.title,
          dynamic: props.dynamic
        });
      }}
    >
      <HStack {...props} w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
      _light={{ backgroundColor: "gray.50" }}
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }}
      _web={{
        shadow: 2,
        borderWidth: 0
      }}
      >
        <Box w="30%">
          <AspectRatio w="full" ratio={1}>
            <Image size="full" source={require("../assets/qrcode.png")} alt="qrcode" />
          </AspectRatio>
          {props.dynamic &&
            <Center
              bg="green.600"
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs"
              }}
              position="absolute" bottom="0" px="1.5" py="0.5"
            >
              Dynamic
            </Center>
          }
        </Box>
        <Stack p="3" space={3} w="70%">
          <Stack space={1}>
            <HStack justifyContent="space-between">
              <Heading size="md">
                {props.title}
              </Heading>
              <IconButton
                p="0"
                icon={
                  <Icon size="5" as={<Ionicons name="heart" />} color={favorite ? "rose.400" : null} />
                }
                onPress={() => {
                  setFavorite(!favorite)
                }}
              />
            </HStack>
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consect...
            </Text>
          </Stack>
          <Text color="coolGray.600" _dark={{ color: "warmGray.200" }} fontSize="xs">
            6 mins ago
          </Text>
        </Stack>
      </HStack>
    </Pressable>
  );
}

export default QRCodeCard;
