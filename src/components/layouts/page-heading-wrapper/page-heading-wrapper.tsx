import { Box, Text } from '@kuma-ui/core';

import { PageHeadingButton } from '@/components/elements/buttons';

type Props = {
  title: string;
  description: string;
};

export const PageHeadingWrapper = ({ title, description }: Props) => {
  return (
    <Box
      pt={88}
      pb={112}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <PageHeadingButton title={title} />
      <Text mt={24} fontSize={'1rem'}>
        {description}
      </Text>
    </Box>
  );
};
