import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px="4">
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center", "left"]}>
            Subscribe To Get Updates
          </Heading>
          <HStack borderBottom={'2px Solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border="none"
              borderRadius="none"
              outline="none"
              focusBorderColor="none"
            />
            <Button
              p="0"
              color="purple"
              variant="ghost"
              borderRadius="0 20px 20px 0"
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text p={"4"}>all rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://youtube.com">You Tube</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://instagram.com">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://twitter.com">Twitter</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
