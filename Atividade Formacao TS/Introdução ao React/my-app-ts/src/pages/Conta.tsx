import { FC, useEffect, useState } from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { api } from '../api';

interface UserData {
  name?: string;
  email: string;
  password: string;
  balance: number;
}

export const Conta: FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    loadData();
  }, []);

  const displayName = userData?.name ?? 'carregando...';
  const balance = userData?.balance ?? 0;

  return (
    <Box
      w="100%"
      maxW="600px"
      mx="auto"
      mt="10"
      p="8"
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
    >

    
      <Heading
        size="lg"
        textAlign="center"
        mb="4"
        fontWeight="bold"
        color="purple.700"
      >
        Bem-vindo, {displayName}!
      </Heading>

      <Text textAlign="center" fontSize="md" color="gray.600" mb="8">
        Aqui está o resumo da sua conta:
      </Text>

      <Flex
        direction="column"
        gap="4"
        bg="purple.50"
        p="6"
        borderRadius="xl"
        boxShadow="md"
        mb="8"
      >
        <Text fontSize="lg" fontWeight="medium" color="gray.700">
          Saldo disponível:
        </Text>

        <Text
          fontSize="3xl"
          fontWeight="bold"
          color={balance >= 0 ? "green.500" : "red.500"}
        >
          R$ {balance.toFixed(2)}
        </Text>
      </Flex>

      <Box textAlign="center">
        <Button
          colorScheme="purple"
          size="lg"
          borderRadius="xl"
          px="10"
          onClick={() => alert("Função ainda não implementada 😄")}
        >
          Acessar funcionalidades
        </Button>
      </Box>
    </Box>
  );
};
