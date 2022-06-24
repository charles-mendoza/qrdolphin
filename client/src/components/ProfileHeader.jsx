import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  IconButton,
  Icon,
  useDisclose,
  Actionsheet,
  ScrollView,
  Button
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const profileMenuItems = [
  {
    title: "Settings",
    routeName: "Settings",
    iconName: "settings-outline",
    iconLibrary: Ionicons,
  },
  {
    title: "Help",
    routeName: "Help",
    iconName: "help-circle-outline",
    iconLibrary: Ionicons,
  },
];

const ProfileActionSheetItem = (props) => {
  return (
    <Actionsheet.Item
      key={props.index}
      py="3"
      startIcon={
        <Icon
          as={props.item.iconLibrary}
          name={props.item.iconName}
          mr="1"
          size="5"
        />
      }
      justifyContent="flex-start"
      onPress={() =>
        props.item.routeName && props.navigation.navigate(props.item.routeName)
      }
    >
      {props.item.title}
    </Actionsheet.Item>
  );
}

const ProfileHeader = (props) => {
  const route = useRoute();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <HStack
        py="5"
        space="4"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
      >
        <Heading fontSize="xl">{props.title}</Heading>
        <IconButton
          icon={<Icon as={Ionicons} name="ellipsis-vertical" />}
          onPress={onOpen}
        />
      </HStack>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        hideDragIndicator
        rounded="0"
      >
        <Actionsheet.Content
          alignItems="flex-end"
          roundedTop="8"
          py="0"
        >
          <ScrollView style={{ width: "100%" }}>
            <VStack space="2" my="5">
              {profileMenuItems.map((item, index) => {
                return (
                  <ProfileActionSheetItem
                    item={item}
                    key={index}
                    route={route}
                    navigation={props.navigation}
                  />
                );
              })}
              <Button
                onPress={()=>{
                  console.log('logout')
                }}
              >
                Log out
              </Button>
            </VStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ProfileHeader;
