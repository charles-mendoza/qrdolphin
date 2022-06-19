import React, { useState } from 'react';
import {
  VStack,
  Box,
  HStack,
  Text,
  Link,
  Button,
  Image,
  Hidden,
  IconButton,
  Icon,
  Center,
  FormControl,
  StatusBar,
  Stack,
  Input,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForgotPassword = (props) => {
  const [text, setText] = useState('');
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
            md: "1016px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden from="md">
            <HStack space="2" px="4" mt="4" mb="5" alignItems="center">
              <IconButton
                variant="unstyled"
                pl="0"
                onPress={() => {
                  props.navigation.goBack()
                }}
                icon={
                  <Icon
                    size="6"
                    as={Ionicons}
                    name="arrow-back"
                    color="coolGray.50"
                  />
                }
              />
              <Text color="coolGray.50" fontSize="lg">
                Forgot Password
              </Text>
            </HStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              _light={{
                bg: "primary.700"
              }}
              _dark={{
                bg: "blueGray.700"
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
              <Image
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={"contain"}
                source={require("../assets/logo-full.png")}
              />
            </Center>
          </Hidden>
          <Box
            py={{
              base: "6",
              md: "12",
            }}
            px={{
              base: "4",
              md: "10",
            }}
            _light={{
              bg: "white",
            }}
            _dark={{
              bg: "coolGray.800",
            }}
            flex="1"
            borderTopRightRadius={{
              md: "xl",
            }}
            borderBottomRightRadius={{
              md: "xl",
            }}
          >
            <VStack justifyContent="space-between" flex="1" space="24">
              <Box>
                <VStack
                  space={{
                    base: "4",
                    md: "5",
                  }}
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    _dark={{
                      color: "coolGray.50",
                    }}
                    _light={{
                      color: "coolGray.800",
                    }}
                  >
                    Forgot Password?
                  </Text>
                  <HStack space="2" alignItems="center">
                    <Text
                      _light={{
                        color: "coolGray.800",
                      }}
                      _dark={{
                        color: "coolGray.400",
                      }}
                    >
                      Not to worry! Enter email address associated with your account and we'll send a link to reset your password.
                    </Text>
                  </HStack>
                </VStack>
                <VStack space="5" mt="6">
                  <FormControl>
                    <Input
                      isRequired
                      size="lg"
                      variant="outline"
                      label="Email"
                      placeholder="Email"
                      borderRadius="4"
                      defaultValue={text}
                      onChangeText={(txt) => setText(txt)}
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
                  {/* Opening Link Tag navigateTo:"SignUp" (react/Router) */}
                  <Button
                    size="md"
                    _light={{
                      bg: "primary.900",
                    }}
                    _dark={{
                      bg: "primary.700",
                    }}
                    onPress={() => {
                    }}
                  >
                    PROCEED
                  </Button>
                  {/* Closing Link Tag */}
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
                <Text
                  _light={{
                    color: "coolGray.800",
                  }}
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  Send
                </Text>
                {/* Opening Link Tag navigateTo:"SignUp" */}
                <Link
                  _text={{
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                  _light={{
                    _text: {
                      color: "primary.900",
                    },
                  }}
                  _dark={{
                    _text: {
                      color: "primary.500",
                    },
                  }}
                  onPress={() => {
                  }}
                >
                  OTP
                </Link>
                {/* Closing Link Tag */}
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
}

export default ForgotPassword;
