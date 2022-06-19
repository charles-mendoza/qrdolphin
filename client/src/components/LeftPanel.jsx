import React from 'react';
import {
  Box,
  Icon,
  VStack,
  Button,
  useDisclose,
  Actionsheet,
  Fab,
  Hidden,
  Avatar,
  Text,
  Divider,
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const sidebarItems = [
  {
    title: "Dashboard",
    routeName: "dashboard",
    iconName: "speedometer-outline",
    iconLibrary: Ionicons,
  },
  {
    title: "QR Codes",
    iconName: "qr-code-outline",
    iconLibrary: Ionicons,
  },
  {
    title: "Profile",
    iconName: "person-outline",
    iconLibrary: Ionicons,
  },
];
const helpItems = [
  {
    title: "Settings",
    iconName: "settings-outline",
    iconLibrary: Ionicons,
  },
  {
    title: "Help",
    routeName: "help",
    iconName: "help-circle-outline",
    iconLibrary: Ionicons,
  },
];

const LeftPanelItemButton = (props) => {
  return (
    <Button
      key={props.index}
      py="3"
      _hover={{ bg: "indigo.700" }}
      _pressed={{ bg: "indigo.800" }}
      _text={{ color: "warmGray.50", fontSize: "sm" }}
      _focus={{ bg: "indigo.800" }}
      startIcon={
        <Icon
          as={props.item.iconLibrary}
          name={props.item.iconName}
          mr={4}
          color="warmGray.50"
          size="5"
        />
      }
      justifyContent="flex-start"
      bg={props.route.name === props.item.routeName ? "indigo.700" : ""}
      onPress={() =>
        props.item.routeName && props.navigation.navigate(props.item.routeName)
      }
    >
      {props.item.title}
    </Button>
  );
}

const MobileActionSheetItem = (props) => {
  return (
    <Actionsheet.Item
      key={props.index}
      py="3"
      _hover={{ bg: "indigo.700" }}
      _pressed={{ bg: "indigo.800" }}
      _text={{ color: "warmGray.50", fontSize: "sm" }}
      _focus={{ bg: "indigo.800" }}
      startIcon={
        <Icon
          as={props.item.iconLibrary}
          name={props.item.iconName}
          mr="1"
          color="warmGray.50"
          size="5"
        />
      }
      justifyContent="flex-start"
      bg={props.route.name === props.item.routeName ? "indigo.700" : ""}
      onPress={() =>
        props.item.routeName && props.navigation.navigate(props.item.routeName)
      }
    >
      {props.item.title}
    </Actionsheet.Item>
  );
}

const LeftPanel = ({ navigation }) => {
  const route = useRoute();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Hidden till="md">
        <Box w={64} _light={{ bg: "primary.700" }} _dark={{ bg: "coolGray.800" }} overflow="hidden">
          <VStack justifyContent="center" mx="auto" mt="8" mb="4" space="2">
            <Avatar
              alignSelf="center"
              size="20"
              source={require('../assets/qrcode.png')}
            >
              JW
            </Avatar>
            <VStack>
              <Text
                bold
                fontSize="md"
                color="warmGray.50"
                textAlign="center"
                fontWeight="medium"
              >
                QR Dolphin
              </Text>
              <Text textAlign="center" color="warmGray.50" fontSize="xs">
                qrdolphin@gmail.com
              </Text>
            </VStack>
          </VStack>
          <Divider opacity="0.2" />
          <ScrollView showsHorizontalScrollIndicator={false}>
            <VStack>
              <Button.Group
                direction="column"
                variant="unstyled"
                p={3}
                space="20"
              >
                <VStack space="3">
                  {sidebarItems.map((item, index) => {
                    return (
                      <LeftPanelItemButton
                        item={item}
                        key={index}
                        route={route}
                        navigation={navigation}
                      />
                    );
                  })}
                </VStack>
                <VStack space="3">
                  {helpItems.map((item, index) => {
                    return (
                      <LeftPanelItemButton
                        item={item}
                        key={index}
                        route={route}
                        navigation={navigation}
                      />
                    );
                  })}
                </VStack>
              </Button.Group>
            </VStack>
          </ScrollView>
        </Box>
      </Hidden>
      <Hidden from="md">
        <>
          <Fab
            icon={
              <Icon
                color="coolGray.200"
                as={Ionicons}
                name="menu"
                size="sm"
              />
            }
            onPress={onOpen}
            p={3}
            _web={{ position: "fixed" }}
          />

          <Actionsheet
            isOpen={isOpen}
            onClose={onClose}
            hideDragIndicator
            rounded="0"
          >
            <Actionsheet.Content
              bg="indigo.500"
              alignItems="flex-end"
              roundedTop="8"
              py="0"
            >
              <ScrollView style={{ width: "100%" }}>
                <VStack space="2" my="5">
                  {sidebarItems.map((item, index) => {
                    return (
                      <MobileActionSheetItem
                        item={item}
                        key={index}
                        route={route}
                        navigation={navigation}
                      />
                    );
                  })}
                  {helpItems.map((item, index) => {
                    return (
                      <MobileActionSheetItem
                        item={item}
                        key={index}
                        route={route}
                        navigation={navigation}
                      />
                    );
                  })}
                </VStack>
              </ScrollView>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      </Hidden>
    </>
  );
}

export default LeftPanel;
