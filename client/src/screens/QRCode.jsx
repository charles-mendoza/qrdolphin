import React from 'react';
import { VStack, Button, Image, AspectRatio, Icon, AlertDialog } from 'native-base';
import Layout from '../components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QRCode = ({ route, navigation }) => {
  const { title, dynamic } = route.params;
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  return (
    <Layout navigation={navigation} title={title} p="4">
      <VStack space="2">
        <AspectRatio w="full" ratio={1} mb="4">
          <Image size="full" source={require("../assets/qrcode.png")} alt="qrcode" />
        </AspectRatio>
        {dynamic &&
          <Button
            leftIcon={<Icon as={Ionicons} name="analytics-outline" size="sm" />}
            onPress={() => {
            }}
          >
            Analytics
          </Button>
        }
        {dynamic &&
          <Button
            colorScheme="success"
            leftIcon={<Icon as={Ionicons} name="pencil" size="sm" />}
            onPress={() => {
            }}
          >
            Edit
          </Button>
        }
        <Button
          colorScheme="danger"
          leftIcon={<Icon as={Ionicons} name="trash-outline" size="sm" />}
          onPress={() => setIsOpen(!isOpen)}
        >
          Delete
        </Button>
      </VStack>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete QR code</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to delete this? This action cannot be
            reversed. Deleted data cannot be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Layout>
  );
}

export default QRCode;
