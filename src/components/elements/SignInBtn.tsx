import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';
import { SignInButton } from '@clerk/nextjs';

const inter = Inter({ weight: '400', subsets: ['latin'] });

type SignInBtnProps = {
  isGlobalNav?: boolean;
};

export const SignInBtn = ({ isGlobalNav }: SignInBtnProps) => {
  return (
    <SignInButton mode='modal'>
      <button
        className={classNames(
          inter.className,
          css({
            color: isGlobalNav ? 'secondary' : 'primary',
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
