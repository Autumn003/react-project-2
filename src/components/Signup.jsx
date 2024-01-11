import { Container, Heading, VStack, Input, Button, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'8'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'8'}
        >
          <Heading alignSelf={'center'}>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'24'}/>

          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme='purple' type='submit'>
            <Link to={'/forgetpassword'}>Sign Up</Link>
          </Button>
          
          <Text textAlign={'right'}>
            Already Signed Up? {' '}
            <Button variant={'link'}>
            <Link to={'/login'}>Log In</Link>
          </Button>
          </Text>

        </VStack>
      </form>
    </Container>
  );
};

export default Signup