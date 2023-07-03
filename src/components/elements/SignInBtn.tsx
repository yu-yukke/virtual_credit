import { SignInButton } from '@clerk/nextjs';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

const inter = Inter({ weight: '400', subsets: ['latin'] });

type SignInBtnProps = {
  isFullRounded?: boolean;
};

export const SignInBtn = ({ isFullRounded }: SignInBtnProps) => {
  return (
    <SignInButton mode='modal'>
      <button
        className={classNames(
          inter.className,
          css({
            color: isFullRounded ? 'secondary' : 'primary',
            fontSize: '13px',
            px: 12,
            py: 6,
            cursor: 'pointer',
          }),
        )}
      >
        Sign in
      </button>
    </SignInButton>
  );
};
