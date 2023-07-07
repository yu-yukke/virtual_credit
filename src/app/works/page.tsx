import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { css } from '../../../styled-system/css';

import { CategoryList } from './_components/CategoryList';
import { TagList } from './_components/TagList';
import { WorkList } from './_components/WorkList';

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
        Works
      </h1>
      <div
        className={css({
          mt: 24,
          display: 'flex',
          flexDir: 'column',
          gap: 16,
        })}
      >
        <Suspense fallback={<div>hogehogehoeg</div>}>
          <CategoryList />
        </Suspense>
        <TagList />
      </div>
      <div
        className={css({
          mt: 48,
        })}
      >
        <Suspense fallback={<div>hogehogehoeg</div>}>
          <WorkList />
        </Suspense>
      </div>
    </div>
  );
}
