import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  IconButton,
  Icon,
  useDisclose,
  Actionsheet,
  ScrollView
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const profileMenuItems = [
  {
    title: "Settings",
    routeName: "Settings",
    iconName: "settings-outline",
    iconLibrary: Ionicons,
  },
  {
    title: "Scan History",
    routeName: "History",
    iconName: "history",
    iconLibrary: MaterialCommunityIcons,
  }
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

const ProfileHeader = ({ navigation, title }) => {
  const route = useRoute();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <HStack
        py="4"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        _light={{ bg: 'white' }}
      >
        <HStack alignItems="center">
          <Heading fontSize="xl">{title}</Heading>
        </HStack>
        <IconButton
          p="1"
          borderRadius="full"
          icon={<Icon as={Ionicons}name="ellipsis-vertical" />}
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
                    navigation={navigation}
                  />
                );
              })}
            </VStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ProfileHeader;
