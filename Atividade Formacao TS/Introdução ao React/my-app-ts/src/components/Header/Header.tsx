import { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Flex
      as="header"
      w="100%"
      py="4"
      px="6"
      align="center"
      justify="center"
      bg="whiteAlpha.800"
      backdropFilter="blur(8px)"
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Heading size="md" color="purple.700">
        {title}
      </Heading>
    </Flex>
  );
};
