import React from 'react';
import { HStack, Heading } from 'native-base';

const MobileHeader = (props) => {
  return (
    <HStack
      alignItems="center"
      space={4}
      py="5"
      px={{ base: 4, md: 8 }}
      justifyContent="space-between"
      _dark={{
        bg: "darkBlue.900",
      }}
      _light={{
        bg: "primary.800",
      }}
    >
      <HStack alignItems="center" space="xs">
        <Heading fontSize="xl" color="white">{props.title}</Heading>
      </HStack>
    </HStack>
  );
}

export default MobileHeader;
