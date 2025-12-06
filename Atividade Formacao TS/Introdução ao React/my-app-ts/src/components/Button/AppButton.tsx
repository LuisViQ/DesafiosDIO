import { FC, MouseEventHandler } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface AppButtonProps extends ButtonProps {
  label: string;
  onClick: MouseEventHandler
}

export const AppButton: FC<AppButtonProps> = ({ label, ...rest }) => {
  return (
    <Button
      w="100%"
      colorScheme="purple"
      borderRadius="full"
      size="md"
      {...rest}
    >
      {label}
    </Button>
  );
};
