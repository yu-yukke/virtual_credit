import { Button } from '@kuma-ui/core';

type Props = {
  text: string;
};

export const FilterButton = ({ text }: Props) => {
  return (
    <Button
      px={16}
      py={8}
      color={'colors.tertiary'}
      fontSize={'0.8125rem'}
      borderRadius={'1.5rem'}
      transition={'all 0.4s'}
      whiteSpace={'nowrap'}
      _hover={{
        color: '#2D2D2E',
        bg: 'white',
      }}
    >
      {text}
    </Button>
  );
};
