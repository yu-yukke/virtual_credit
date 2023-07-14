import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

import { Creators } from './_components/Creators';
import { Jobs } from './_components/Jobs';
import { db } from '@/db';
import { jobs } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

async function getCreators() {
  const result = await db.query.users.findMany({
    with: {
      jobMappings: {
        with: {
          job: true,
        },
      },
    },
  });

  return await result;
}

async function getJobs() {
  const result = await db.select().from(jobs);

  return result;
}

export default async function Page() {
  const creators = await getCreators();
  const jobs = await getJobs();

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
        <Jobs jobs={jobs} />
      </div>
      <div
        className={css({
          mt: 48,
        })}
      >
        <Creators creators={creators} />
      </div>
    </div>
  );
}
