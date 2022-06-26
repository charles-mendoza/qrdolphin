import React from 'react';
import {
  HStack,
  Heading,
  SearchIcon,
  Input,
  useDisclose,
} from 'native-base';

const DesktopHeader = (props) => {
  const { /*isOpen,*/ onOpen, /*onClose*/ } = useDisclose();
  return (
    <>
      <HStack
        alignItems="center"
        space={4}
        py="5"
        px="8"
        bg="white"
        _dark={{
          bg: "darkBlue.900"
        }}
        _light={{
          bg: "primary.800"
        }}
      >
        <Heading
          fontSize="xl"
          flex={1}
          fontWeight="semibold"
          color="white"
        >
          {props.title}
        </Heading>

        <HStack space={6}>
          <Input
            pl="5"
            maxW="96"
            size="lg"
            w={{ lg: 80, xl: 96 }}
            placeholder="Search"
            onClick={onOpen}
            onKeyPress={onOpen}
            InputRightElement={<SearchIcon size={5} mr="4" color="muted.400" />}
          />
        </HStack>
      </HStack>
    </>
  );
}

export default DesktopHeader;
