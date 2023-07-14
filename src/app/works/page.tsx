import classNames from 'classnames';
import { desc } from 'drizzle-orm';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

import { Categories } from './_components/Categories';
import { Tags } from './_components/Tags';
import { Works } from './_components/Works';
import { db } from '@/db';
import { categories, tags, work_images } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

async function getWorks() {
  const result = await db.query.works.findMany({
    with: {
      category: true,
      workImages: {
        orderBy: [desc(work_images.isMain)],
      },
    },
  });

  return await result;
}

async function getCategories() {
  const result = await db.select().from(categories);

  return await result;
}

async function getTags() {
  const result = await db.select().from(tags);

  return await result;
}

export default async function Page() {
  const works = await getWorks();
  const categories = await getCategories();
  const tags = await getTags();

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
        <Categories categories={categories} />
        <Tags tags={tags} />
      </div>
      <div
        className={css({
          mt: 48,
        })}
      >
        <Works works={works} />
      </div>
    </div>
  );
}
