import React, { useState } from 'react';
import {
  Button,
  Input,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  Image,
  Pressable,
  Center,
  Hidden,
  IconButton,
  Icon,
  StatusBar,
  Stack,
  Box,
  ScrollView
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FacebookIcon, GoogleIcon } from '../../components/Icons';

export const SignUpForm = ({ props }) => {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const [confirm_pass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
      }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{
          bg: "white",
        }}
        _dark={{
          bg: "coolGray.800",
        }}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{
          base: "2xl",
          md: "xl",
        }}
        borderBottomRightRadius={{
          base: "0",
          md: "xl",
        }}
        borderTopLeftRadius={{
          base: "2xl",
          md: "0",
        }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
              <VStack
                space={{
                  base: "7",
                  md: "4",
                }}
              >
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
                <Input
                  isRequired
                  type={showPass ? "" : "password"}
                  size="lg"
                  label="Password"
                  variant="outline"
                  placeholder="Password"
                  borderRadius="4"
                  defaultValue={pass}
                  onChangeText={(txt) => setPass(txt)}
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
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      onPress={() => {
                        setShowPass(!showPass);
                      }}
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Ionicons}
                          name={showPass ? "eye-off-outline" : "eye-outline"}
                        />
                      }
                    />
                  }
                />
                <Input
                  isRequired
                  type={showConfirmPass ? "" : "password"}
                  label="Confirm Password"
                  size="lg"
                  variant="outline"
                  placeholder="Confirm Password"
                  borderRadius="4"
                  defaultValue={confirm_pass}
                  onChangeText={(txt) => setConfirmPass(txt)}
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
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      onPress={() => {
                        setShowConfirmPass(!showConfirmPass);
                      }}
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Ionicons}
                          name={showConfirmPass ? "eye-off-outline" : "eye-outline"}
                        />
                      }
                    />
                  }
                />
              </VStack>
              <Checkbox
                alignItems="flex-start"
                mt="5"
                isChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center">
                  <Text fontSize="sm" color="coolGray.400" pl="2">
                    I accept the{' '}
                  </Text>
                  <Link
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      textDecoration: 'none',
                    }}
                    _light={{
                      _text: {
                        color: 'primary.900',
                      },
                    }}
                    _dark={{
                      _text: {
                        color: 'primary.500',
                      },
                    }}>
                    Terms of Use
                  </Link>
                  <Text fontSize="sm"> & </Text>

                  <Link
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      textDecoration: 'none',
                    }}
                    _light={{
                      _text: {
                        color: 'primary.900',
                      },
                    }}
                    _dark={{
                      _text: {
                        color: 'primary.500',
                      },
                    }}>
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              <Button
                mt="5"
                size="md"
                borderRadius="4"
                _text={{
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                }}
              >
                SIGN UP
              </Button>
              {/* Closing Link Tag */}
              <HStack
                mt="5"
                space="2"
                mb={{
                  base: 6,
                  md: 7,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{
                    bg: "coolGray.200",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
                <Text
                  fontWeight="medium"
                  _light={{
                    color: "coolGray.300",
                  }}
                  _dark={{
                    color: "coolGray.500",
                  }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{
                    bg: "coolGray.200",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable>
                  <FacebookIcon />
                </Pressable>
                <Pressable>
                  <GoogleIcon />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{
            base: "auto",
            md: "8",
          }}
        >
          <Text
            _light={{
              color: "coolGray.800",
            }}
            _dark={{
              color: "coolGray.400",
            }}
          >
            Already have an account?
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
              props.navigation.navigate("SignIn");
            }}
          >
            Sign in
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </ScrollView>
  );
}

const SignUp = (props) => {
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
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
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
                  Sign Up
                </Text>
              </HStack>
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  Welcome
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "primary.300",
                  }}
                >
                  Sign up to continue
                </Text>
              </VStack>
            </VStack>
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
              borderTopLeftRadius={{
                base: "0",
                md: "xl",
              }}
              borderBottomLeftRadius={{
                base: "0",
                md: "xl",
              }}
            >
              <Image
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={"contain"}
                source={require("../../assets/logo-full.png")}
              />
            </Center>
          </Hidden>
          <SignUpForm props={props} />
        </Stack>
      </Center>
    </>
  );
}

export default SignUp;
