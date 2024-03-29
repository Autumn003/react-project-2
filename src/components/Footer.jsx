import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
              Subsribe To Get Updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Your Email Here..."
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
  
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            py={['4', '0']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All Rights Reserved</Text>
          </VStack>
  
          <VStack
            w={'full'}
          >
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <HStack py={'2'}>
              <Button fontSize={'2rem'} variant={'link'} colorScheme='purple'>
                <a target='blank' href='https://github.com/Autumn003'><AiFillGithub/></a>
              </Button>
              <Button fontSize={'2rem'} variant={'link'} colorScheme='purple'>
                <a target='blank' href='https://linkedin.com/in/hemant003/'><AiFillLinkedin/></a>
              </Button>
              <Button fontSize={'2rem'} variant={'link'} colorScheme='purple'>
                <a target='blank' href='https://instagram.com/yourcodebox'><AiFillInstagram/></a>
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  