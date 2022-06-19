import React from 'react';
import {
  VStack,
  Box,
  HStack,
  Text,
  Image,
  Hidden,
  IconButton,
  Icon,
  Center,
  FormControl,
  StatusBar,
  Stack,
  Input,
  Radio,
  Checkbox,
  Switch,
  Button,
  Slider
} from 'native-base';
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
    <>
      <Box>
        <VStack space="5" my="6">
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
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
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
          <Text
            bold
            fontSize="m"
            _dark={{
              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.800",
            }}
          >
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
              <Text
                fontSize="xs"
                fontWeight="normal"
                _light={{
                  color: "coolGray.800",
                }}
                _dark={{
                  color: "coolGray.400",
                }}
              >
                Custom Eye Color
              </Text>
            </Checkbox>
          </HStack>
          <Text bold fontSize="m">
            Background Color
          </Text>
          <SampleAccordion title="ADD LOGO IMAGE" icon="image-outline" />
          <SampleAccordion title="CUSTOMIZE DESIGN" icon="qr-code-outline" />
        </VStack>
      </Box>
      <HStack
        mt="28"
        mb="4"
        space="1"
        safeAreaBottom
        alignItems="center"
        justifyContent="center"
      >
        {/* Footer */}
      </HStack>
    </>
  );
}

const Home = (props) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: "primary.900",
        }}
        _dark={{
          bg: "coolGray.900",
        }}
      />
      <HStack
        py="5"
        space="2" px="4"
        justifyContent="space-between"
        alignItems="center"
        _dark={{
          bg: "darkBlue.900",
        }}
        _light={{
          bg: "primary.800",
        }}
      >
        <HStack alignItems="center">
          <IconButton icon={<Icon as={Ionicons} name="menu" color="white" />} />
          <HStack alignItems="center" pl="2" pb="1">
            <Text color="coolGray.50" fontSize="lg" bold>
              qr
            </Text>
            <Text color="coolGray.50" fontSize="lg">
              dolphin
            </Text>
          </HStack>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={Ionicons} name="search" color="white" />} />
          <IconButton icon={<Icon as={Ionicons} name="ellipsis-vertical" color="white" />} />
        </HStack>
      </HStack>
      <Center
        my="auto"
        _dark={{
          bg: "blueGray.900",
        }}
        _light={{
          bg: "primary.800",
        }}
        flex="1"
      >
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
              _light={{
                bg: "gray.100"
              }}
              _dark={{
                bg: "coolGray.800"
              }}
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
          <Center
            flex="1"
            py={{
              base: "6",
              md: "12",
            }}
            _light={{
              bg: "white",
            }}
            _dark={{
              bg: "blueGray.700",
            }}
            borderTopRightRadius={{
              md: "xl",
            }}
            borderBottomRightRadius={{
              md: "xl",
            }}
          >
            <VStack>
              <Image
                size="80"
                alt="QR Code"
                resizeMode={"contain"}
                source={require("../assets/qrcode.png")}
              />
              <Slider defaultValue={50} size="lg" mt="6">
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
              <HStack flex="1" mt="6" justifyContent="space-between" alignItems="center">
                <Button colorScheme="green" size="lg">Create QR Code</Button>
                <Button size="lg">Download PNG</Button>
              </HStack>
              <HStack flex="1" mt="3" alignItems="center">
                <Button size="lg" px="6" variant="outline" borderColor="darkBlue.500">.SVG</Button>
                <Button size="lg" px="6" mx="2" variant="outline" borderColor="darkBlue.500">.PDF</Button>
                <Button size="lg" px="6" variant="outline" borderColor="darkBlue.500">.EPS</Button>
              </HStack>
            </VStack>
          </Center>
        </Stack>
      </Center>
    </>
  );
}

export default Home;
