import { Button, Heading } from '@kuma-ui/core';

type Props = {
  title: string;
};

export const PageHeadingButton = ({ title }: Props) => {
  return (
    <Button
      cursor={'default'}
      width={'fit-content'}
      px={16}
      py={8}
      borderRadius={'1.5rem'}
      bg={'white'}
      boxShadow={
        '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)'
      }
    >
      <Heading as='h1' fontSize={'0.875rem'} color={'colors.tertiary'}>
        {title}
      </Heading>
    </Button>
  );
};
