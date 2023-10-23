import { Text } from '@kuma-ui/core';

import { PageHeadingButton } from '@/components/elements/buttons';

type Props = {
  title: string;
  description: string;
};

export const PageHeadingWrapper = ({ title, description }: Props) => {
  return (
    <>
      <PageHeadingButton title={title} />
      <Text mt={24} fontSize={'1rem'}>
        {description}
      </Text>
    </>
  );
};
