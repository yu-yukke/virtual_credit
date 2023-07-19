import { SignInButton } from '@clerk/nextjs';
import { Button } from '@kuma-ui/core';
import { Inter } from 'next/font/google';

const inter = Inter({ weight: '400', subsets: ['latin'] });

export const SignInBtn = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        color={'colors.text.secondary'}
        fontSize={13}
        letterSpacing={0.3}
        px={12}
        py={8}
        cursor={'pointer'}
        className={inter.className}
      >
        Sign in
      </Button>
    </SignInButton>
  );
};
