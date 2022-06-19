import React from 'react';
import {
  Button,
  Image,
  Center,
  Hidden,
  Stack
} from 'native-base';

const NavigationButtons = (props) => {
  return (
    <>
      <Button
        variant="outline"
        mb="2"
        w="100%"
        size="lg"
        borderRadius="4"
        _text={{
          fontWeight: "medium",
        }}
        _light={{
          bg: 'white'
        }}
        _dark={{
          bg: 'white'
        }}
        onPress={() => {
          props.navigation.navigate('Home')
        }}
      >
        HOME
      </Button>
      <Button
        variant="outline"
        mb="2"
        w="100%"
        size="lg"
        borderRadius="4"
        _text={{
          color: "white",
          fontWeight: "medium",
        }}
        onPress={() => {
          props.navigation.navigate('Gallery')
        }}
      >
        GALLERY
      </Button>
      <Button
        variant="outline"
        mb="2"
        w="100%"
        size="lg"
        borderRadius="4"
        _text={{
          color: "white",
          fontWeight: "medium",
        }}
        onPress={() => {
          props.navigation.navigate('SignIn')
        }}
      >
        SIGN IN
      </Button>
      <Button
        mb="10"
        variant="outline"
        w="100%"
        size="lg"
        borderRadius="4"
        _text={{
          color: "white",
          fontWeight: "medium",
        }}
        onPress={() => {
          props.navigation.navigate('SignUp')
        }}
      >
        SIGN UP
      </Button>
    </>
  );
}

const Splash = (props) => {
  return (
    <>
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
            md: "400px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden from="md">
            <Center
              flex="1"
              p="4"
            >
              <Image
                h="24"
                mb="9"
                size="90"
                alt="NativeBase"
                resizeMode={"contain"}
                source={require("../assets/logo.png")}
              />
              <Image
                width="200"
                height="90"
                alt="NativeBase Startup+"
                resizeMode={"contain"}
                source={require("../assets/logo-full.png")}
              />
              <NavigationButtons {...props} />
            </Center>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              _light={{
                bg: "primary.700"
              }}
              _dark={{
                bg: "blueGray.800"
              }}
              p="10"
              borderRadius={{
                base: "0",
                md: "xl",
              }}
            >
              <Image
                width="100%"
                height="150"
                alt="NativeBase Startup+"
                resizeMode={"contain"}
                source={require("../assets/logo-full.png")}
              />
              <NavigationButtons {...props} />
            </Center>
          </Hidden>
        </Stack>
      </Center>
    </>
  );
}

export default Splash;
