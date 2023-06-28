import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

const inter = Inter({ weight: '400', subsets: ['latin'] });

type Props = {
  isGlobalNav?: boolean;
};

export const SignInButton = ({ isGlobalNav }: Props) => {
  return (
    <button
      className={classNames(
        inter.className,
        css({
          color: isGlobalNav ? 'secondary' : 'primary',
          fontSize: '13px',
          px: 12,
          py: 6,
        }),
      )}
    >
      Sign in
    </button>
  );
};
