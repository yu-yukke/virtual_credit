import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { css } from '../../../styled-system/css';

import { CategoryList } from './_components/CategoryList';
import { TagList } from './_components/TagList';
import { WorkList } from './_components/WorkList';
import { PageWrapper } from '@/components/layouts/PageWrapper';
import { db } from '@/db';
import { categories, tags } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default async function Page() {
  const workList = await db.query.works.findMany({
    with: {
      workImages: {
        orderBy: (work_images, { desc }) => [desc(work_images.isMain)],
        limit: 5,
      },
    },
  });
  const categoryList = await db.select().from(categories);
  const tagList = await db.select().from(tags);

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
          <CategoryList categories={categoryList} />
          <TagList tags={tagList} />
        </div>
        <div
          className={css({
            mt: 48,
          })}
        >
          <WorkList works={workList} />
        </div>
      </div>
    </PageWrapper>
  );
}
