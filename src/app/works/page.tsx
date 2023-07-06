import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { css } from '../../../styled-system/css';

import { CategoryList } from './_components/CategoryList';
import { TagList } from './_components/TagList';
import { WorkList } from './_components/WorkList';
import { PageWrapper } from '@/components/layouts/PageWrapper';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default function Page() {
  return (
    <PageWrapper>
      <div
        className={css({
          py: 'baseY',
        })}
      >
        <div>
          <h1
            className={classNames(
              inter500.className,
              css({ color: 'tertiary', fontSize: '2xl', letterSpacing: 'sm' }),
            )}
          >
            Works
          </h1>
        </div>
        <div
          className={css({
            mt: 24,
            display: 'flex',
            flexDir: 'column',
            gap: 16,
          })}
        >
          <CategoryList />
          <TagList />
        </div>
        <div
          className={css({
            mt: 48,
          })}
        >
          <WorkList />
        </div>
      </div>
    </PageWrapper>
  );
}
