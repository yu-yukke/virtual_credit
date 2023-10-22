import { Button } from '@kuma-ui/core';

type Props = {
  text: string;
};

export const NavButton = ({ text }: Props) => {
  return (
    <Button
      px={16}
      py={8}
      fontSize={'0.8125rem'}
      color={'colors.secondary'}
      borderRadius={'1.5rem'}
      borderWidth={1}
      borderStyle={'solid'}
      borderColor={'transparent'}
      transition={'all 0.4s'}
      _hover={{
        bg: '#FAFAFA',
        boxShadow:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
      }}
    >
      {text}
    </Button>
  );
};
