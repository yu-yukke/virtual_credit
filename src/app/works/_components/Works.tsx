import classNames from 'classnames';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { WorkCard } from '@/components/elements/WorkCard';
import { Category, Work, WorkImage } from '@/db/schema';

type WorkList = (Work & { category: Category } & { workImages: WorkImage[] })[];

async function getWorks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/works`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Works = async () => {
  const works: WorkList = await getWorks();

  return (
    <ul
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
      })}
    >
      {works.map((work) => (
        <li
          className={classNames(
            'group',
            css({
              gridColumn: 'auto',
            }),
          )}
          key={work.id}
        >
          <Link href={`/works/${work.id}`}>
            <WorkCard work={work} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
