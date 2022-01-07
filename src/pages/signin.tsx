import { FC } from 'react';
import { Flex, Stack, Button } from '@chakra-ui/react';
import Head from 'next/head';

import Input from '../components/Form/Input';

const SignIn: FC = () => {
  return (
    <>
      <Head>
        <title>Entrar | Dashgo</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          direction="column"
          as="form"
          width="100%"
          maxW="360px"
          bg="gray.800"
          p="8"
          borderRadius="4px"
        >
          <Stack spacing="4">
            <Input type="email" name="email" label="E-mail" />
            <Input type="password" name="password" label="Senha" />
            <Button colorScheme="pink" size="lg">
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
