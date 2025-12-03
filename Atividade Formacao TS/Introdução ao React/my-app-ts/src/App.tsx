import { Layout } from './components/Layout/Layout';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { LoginCard } from './components/Card/LoginCard';

function App() {
  return (
    <Layout>
      <Box
        minH="100vh"
        bgGradient="linear(to-br, purple.600, pink.400)"
      >
        <Header title="Minha Aplicação Bonita" />

        <Flex
          align="center"
          justify="center"
          minH="calc(100vh - 64px)"
          px="4"
        >
          <LoginCard />
        </Flex>
      </Box>
    </Layout>
  );
}

export default App;
