import { FC } from 'react';
import { Box, Heading, Text, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/AppButton';
import { getWelcomeMessage } from '../../utils/welcome';

export const LoginCard: FC = () => {
  const handleLoginClick = () => {
    const message = getWelcomeMessage();
    alert(message);
  };

  return (
    <Box
      w="100%"
      maxW="400px"
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      p="8"
    >
      <Heading
        size="lg"
        textAlign="center"
        mb="2"
        fontWeight="bold"
        color="purple.700"
      >
        Faça login
      </Heading>

      <Text fontSize="sm" textAlign="center" mb="6" color="gray.500">
        Acesse sua conta para continuar
      </Text>

      <Box>
        <Input
          placeholder="E-mail"
          type="email"
          mb="4"
        />

        <Input
          placeholder="Senha"
          type="password"
          mb="5"
        />

        <AppButton
          label="Entrar"
          onClick={handleLoginClick}
        />
      </Box>
    </Box>
  );
};
