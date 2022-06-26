import React, { useState } from 'react';
import {
  Center,
  Avatar,
  Heading,
  Button,
  Image,
  Box,
  HStack
} from 'native-base';
import Layout from '../components/Layout';
import Tab from '../components/Tab';

const tabs = [
  'Static',
  'Dynamic',
]

const Profile = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  return (
    <Layout navigation={navigation}>
      <Image w="full" h="100" source={require('../assets/profile-cover.png')} alt="profile-cover" />
      <Center top="54" position="absolute" alignSelf="center">
        <Avatar bg="purple.600" size="xl" source={{
          uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>
          RB
        </Avatar>
        <Heading size="sm" my="2">porky</Heading>
      </Center>
      <Box px="4" mb="6">
        <Button mt="24">Edit profile</Button>
      </Box>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        _light={{
          bg: 'white',
          borderBottomColor: 'gray.200',
          borderBottomWidth: 1
        }}
      >
        {tabs.map((tab, i) => {
          return <Tab key={tab} title={tab} onPress={() => setIndex(i)} active={index === i} />
        })}
      </HStack>
    </Layout>
  );
}

export default Profile;
