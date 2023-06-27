import classNames from 'classnames';
import { Inter } from 'next/font/google';

import { css } from '../../../styled-system/css';

import { WorksList } from './_components/WorksList';
import { db } from '@/db';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default async function Works() {
  const works = await db.query.works.findMany({
    with: {
      workImages: {
        limit: 5,
      },
    },
  });

  return (
    <>
      <section>
        <h1
          className={classNames(
            inter500.className,
            css({ color: 'tertiary', fontSize: '2xl', letterSpacing: 'sm' }),
          )}
        >
          Works
        </h1>
      </section>
      <section>
        <WorksList works={works} />
      </section>
    </>
  );
}
