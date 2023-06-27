import classNames from 'classnames';
import { Inter } from 'next/font/google';

import { css } from '../../../styled-system/css';

const inter = Inter({ weight: '500', subsets: ['latin'] });

type Props = {
  isGlobalNav?: boolean;
};

export const SignUpButton = ({ isGlobalNav }: Props) => {
  return (
    <button
      className={classNames(
        inter.className,
        css({
          fontSize: '13px',
          px: 12,
          py: 6,
          color: 'white',
          bgGradient: 'signUp',
          rounded: isGlobalNav ? 'full' : 'sm',
        }),
      )}
    >
      Get Started
    </button>
  );
};
