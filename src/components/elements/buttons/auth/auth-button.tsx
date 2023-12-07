'use client';

import { Button, Text, css } from '@kuma-ui/core';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { signIn } from 'next-auth/react';

type Props = {
  provider: 'google' | 'twitter';
};

const toUpperCase = (provider: string) => {
  const firstLetter = provider.substring(0, 1).toUpperCase();
  const otherLetter = provider.substring(1).toLowerCase();

  return `${firstLetter}${otherLetter}`;
};

const switchIcon = (provider: string) => {
  switch (provider) {
    case 'twitter':
      return (
        <TwitterIcon
          fontSize='small'
          className={css`
            fill: #6c6c75 !important;
          `}
        />
      );
    case 'google':
      return (
        <GoogleIcon
          fontSize='small'
          className={css`
            fill: #6c6c75 !important;
          `}
        />
      );
    default:
      return;
  }
};

export const AuthButton = ({ provider }: Props) => {
  const providerText = toUpperCase(provider);

  return (
    <Button
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={8}
      width={'100%'}
      py={12}
      borderRadius={'0.25rem'}
      borderStyle={'solid'}
      borderWidth={1}
      borderColor={'colors.borderPrimary'}
      transition={'all 0.4s'}
      onClick={() => signIn(`${provider}`)}
      _hover={{
        bg: '#FAFAFA',
      }}
    >
      {switchIcon(provider)}
      <Text as='span' color={'colors.secondary'}>
        {providerText}
      </Text>
    </Button>
  );
};
