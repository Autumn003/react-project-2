import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>

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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme='purple' type='submit'>
            <Link to={'/forgetpassword'}>Log In</Link>
          </Button>
          
          <Text textAlign={'right'}>
            New User? {' '}
            <Button variant={'link'}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          </Text>

        </VStack>
      </form>
    </Container>
  );
};

export default Login;
