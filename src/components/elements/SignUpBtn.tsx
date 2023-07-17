import { SignUpButton } from '@clerk/nextjs';
import { Button, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

const inter = Inter({ weight: '500', subsets: ['latin'] });

type SignUpBtnProps = {
  isFullRounded?: boolean;
};

export const SignUpBtn = ({ isFullRounded }: SignUpBtnProps) => {
  return (
    <SignUpButton mode='modal'>
      <Button
        color={'white'}
        fontSize={13}
        letterSpacing={0.3}
        px={12}
        py={8}
        cursor={'pointer'}
        bg={'linear-gradient(90deg, #8746E5 0%, #279ADB 100%)'}
        className={clsx(
          inter.className,
          isFullRounded
            ? css`
                border-radius: 9999px;
              `
            : css`
                border-radius: 0.25rem;
              `,
        )}
      >
        Get Started
      </Button>
    </SignUpButton>
  );
};
