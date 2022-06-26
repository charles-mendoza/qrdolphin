import React from 'react';
import {
  HStack,
  Heading,
  Text,
  TextArea,
  Icon,
  IconButton,
  Button,
  useToast
} from 'native-base';
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

const ScanResult = ({ route, navigation }) => {
  const { title, data } = route.params;
  const toast = useToast();

  const copyData = () => {
    Clipboard.setString(data);
    toast.show({ description: 'Successfully copied data to clipboard' });
  }

  return (
    <Layout navigation={navigation} title={title} p="4">
      <TextArea value={data} fontSize="md" h={40} mb="4" isReadOnly
      rightElement={
        <HStack alignSelf="flex-end">
          <IconButton
            icon={<Icon as={Ionicons} name="share-social-outline" />}
          />
          <IconButton
            icon={<Icon as={Ionicons} name="copy-outline" />}
            onPress={copyData}
          />
        </HStack>
      }
      />
      <Button>Search on web</Button>
    </Layout>
  );
}

export default ScanResult;
