import React from 'react';
// import { Pressable, Animated } from 'react-native';
import {
  VStack,
  Box,
  HStack,
  Text,
  Image,
  Hidden,
  Icon,
  Center,
  FormControl,
  Stack,
  Input,
  Radio,
  Checkbox,
  Switch,
  Button,
  Slider,
  ScrollView,
} from 'native-base';
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SampleAccordion = (props) => {
  return (
    <Box
      shadow="4"
      borderWidth="1"
      borderColor="coolGray.300"
      _light={{
        bg: "white",
        borderColor: "coolGray.300"
      }}
      _dark={{
        bg: "blueGray.700",
        borderColor: "coolGray.700"
      }}
    >
      <HStack alignItems="center">
        <Box
          mr="2"
          p="3"
          _light={{
            bg: "blueGray.200"
          }}
          _dark={{
            bg: "blueGray.800"
          }}
        >
          <Icon as={Ionicons} name={props.icon} />
        </Box>
        <HStack flex="1" justifyContent="space-between" alignItems="center" p="1">
          <Text fontSize="md">{props.title}</Text>
          <Icon as={Ionicons} name="chevron-down" mr="2" />
        </HStack>
      </HStack>
    </Box>
  );
}

const QRForm = () => {
  return (
    <Box>
      <VStack space="5" mb="6">
        <SampleAccordion title="ENTER CONTENT" icon="md-document-text" />
        <FormControl>
          <Input
            isRequired
            size="lg"
            variant="outline"
            label="Content"
            placeholder="Content"
            borderRadius="4"
            _text={{
              fontSize: "sm",
              fontWeight: "medium",
            }}
          />
        </FormControl>
        <HStack space="2" alignItems="center">
          <Switch size="lg" />
          <Text>Statistics and Editability</Text>
        </HStack>
      </VStack>
      <VStack
        space={{
          base: "4",
          md: "5",
        }}
      >
        <SampleAccordion title="SET COLOR" icon="brush" />
        <Text fontSize="sm" bold>
          Foreground Color
        </Text>
        <HStack space="2" alignItems="center">
          <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
            <HStack space="2" alignItems="center">
              <Radio value="1" size="sm" my={1}>
                <Text fontSize="xs">Single Color</Text>
              </Radio>
              <Radio value="2" size="sm" my={1}>
                <Text fontSize="xs">Color Gradient</Text>
              </Radio>
            </HStack>
          </Radio.Group>
          <Checkbox
            alignItems="flex-start"
            isChecked
            value="demo"
            colorScheme="primary"
            accessibilityLabel="Remember me"
          >
            <Text fontSize="xs" fontWeight="normal">
              Custom Eye Color
            </Text>
          </Checkbox>
        </HStack>
        <Text bold fontSize="sm">
          Background Color
        </Text>
        <SampleAccordion title="ADD LOGO IMAGE" icon="image-outline" />
        <SampleAccordion title="CUSTOMIZE DESIGN" icon="qr-code-outline" />
      </VStack>
    </Box>
  );
}

const Generator = (props) => {
  return (
    <Layout navigation={props.navigation}>
      <Center flex="1" my="auto">
        <Stack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          w="100%"
          maxW={{
            md: "1132px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden till="md">
            <Box
              flex="1"
              p="6"
              px={{
                base: "4",
                md: "8",
              }}
              borderTopLeftRadius={{
                md: "xl",
              }}
              borderBottomLeftRadius={{
                md: "xl",
              }}
            >
              <QRForm />
            </Box>
          </Hidden>
          <ScrollView
            flex="1"
            maxW={{
              md: "377px",
            }}
            borderTopRightRadius={{
              md: "xl",
            }}
            borderBottomRightRadius={{
              md: "xl",
            }}
          >
            <Hidden from="md">
              <QRForm />
            </Hidden>
            <Center p="6">
              <Box>
                <Image
                  size="80"
                  alt="QR Code"
                  resizeMode={"contain"}
                  source={require("../assets/qrcode.png")}
                />
                <Box>
                  <Slider defaultValue={50} size="lg" mt="6">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </Box>
              </Box>
              <HStack flex="1" mt="6" space="4" justifyContent="space-between" alignItems="center">
                <Button colorScheme="green" size="lg">Create QR Code</Button>
                <Button size="lg">Download PNG</Button>
              </HStack>
              <HStack flex="1" mt="3" space="4" alignItems="center">
                <Button size="lg" px="6" variant="outline" borderColor="darkBlue.500">.SVG</Button>
                <Button size="lg" px="6" variant="outline" borderColor="darkBlue.500">.PDF</Button>
                <Button size="lg" px="6" variant="outline" borderColor="darkBlue.500">.EPS</Button>
              </HStack>
            </Center>
          </ScrollView>
        </Stack>
      </Center>
    </Layout>
  );
}

export default Generator;
