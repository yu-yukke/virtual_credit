import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

import { Creators } from './_components/Creators';
import { Jobs } from './_components/Jobs';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default function Page() {
  return (
    <div
      className={css({
        py: 'baseY',
      })}
    >
      <h1
        className={classNames(
          inter500.className,
          css({ color: 'tertiary', fontSize: '2xl', letterSpacing: 'sm' }),
        )}
      >
        Creators
      </h1>
      <div
        className={css({
          mt: 24,
          display: 'flex',
          flexDir: 'column',
          gap: 16,
        })}
      >
        <Jobs />
      </div>
      <div
        className={css({
          mt: 48,
        })}
      >
        <Creators />
      </div>
    </div>
  );
}
