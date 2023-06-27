import classNames from 'classnames';
import { Inter } from 'next/font/google';

import { css } from '../../../styled-system/css';

import { CategoryList } from './_components/CategoryList';
import { TagList } from './_components/TagList';
import { WorksList } from './_components/WorksList';

import { db } from '@/db';
import { Category, Tag, categories, tags } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default async function Works() {
  const works = await db.query.works.findMany({
    with: {
      workImages: {
        limit: 5,
      },
    },
  });
  const workCategories: Category[] = await db.select().from(categories);
  const workTags: Tag[] = await db.select().from(tags);

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
      <section
        className={css({
          mt: 24,
          display: 'flex',
          flexDir: 'column',
          gap: 16,
        })}
      >
        <CategoryList categories={workCategories} />
        <TagList tags={workTags} />
      </section>
      <section
        className={css({
          mt: 48,
        })}
      >
        <WorksList works={works} />
      </section>
    </>
  );
}
