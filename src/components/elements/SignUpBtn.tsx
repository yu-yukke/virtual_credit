import { SignUpButton } from '@clerk/nextjs';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

const inter = Inter({ weight: '500', subsets: ['latin'] });

type SignUpBtnProps = {
  isFullRounded?: boolean;
};

export const SignUpBtn = ({ isFullRounded }: SignUpBtnProps) => {
  return (
    <SignUpButton mode='modal'>
      <button
        className={classNames(
          inter.className,
          css({
            fontSize: '13px',
            px: 12,
            py: 6,
            color: 'white',
            bgGradient: 'signUp',
            cursor: 'pointer',
            rounded: isFullRounded ? 'full' : 'sm',
          }),
        )}
      >
        Get Started
      </button>
    </SignUpButton>
  );
};
