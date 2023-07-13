import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../../../styled-system/css';

import { User } from '@/db/schema';

const inter = Inter({ weight: '500', subsets: ['latin'] });

type UsersContentsProps = {
  creator: User;
};

export const UsersContents = async ({ creator }: UsersContentsProps) => {
  return (
    <div
      className={css({
        mt: 80,
      })}
    >
      <div className={css({ display: 'flex' })}>
        <button
          type='button'
          className={classNames(
            inter.className,
            css({
              color: 'quaternary',
              py: 20,
              px: 24,
              cursor: 'pointer',
              letterSpacing: 'lg',
            }),
          )}
        >
          MY WORKS
        </button>
        <button
          type='button'
          className={classNames(
            inter.className,
            css({
              color: 'quaternary',
              py: 20,
              px: 24,
              cursor: 'pointer',
              letterSpacing: 'lg',
            }),
          )}
        >
          ABOUT ME
        </button>
      </div>
    </div>
  );
};
