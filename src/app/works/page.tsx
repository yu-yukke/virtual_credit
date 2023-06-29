import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

import { CategoryList } from './_components/CategoryList';
import { TagList } from './_components/TagList';
import { WorkList } from './_components/WorkList';
import { db } from '@/db';
import { Category, Tag, Work, WorkImage, categories, tags } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default async function Works() {
  const works: (Work & { workImages: WorkImage[] })[] =
    await db.query.works.findMany({
      with: {
        workImages: {
          limit: 5,
        },
      },
    });
  const workCategories: Category[] = await db.select().from(categories);
  const workTags: Tag[] = await db.select().from(tags);

  return (
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
        <CategoryList categories={workCategories} />
        <TagList tags={workTags} />
      </div>
      <div
        className={css({
          mt: 48,
        })}
      >
        <WorkList works={works} />
      </div>
    </div>
  );
}
