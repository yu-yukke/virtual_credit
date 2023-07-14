import classNames from 'classnames';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { WorkCard } from '@/components/elements/WorkCard';
import { Category, Work, WorkImage } from '@/db/schema';

type WorksProps = {
  works: (Work & { category: Category } & { workImages: WorkImage[] })[];
};

export const Works = async ({ works }: WorksProps) => {
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
            <WorkCard
              work={work}
              category={work.category}
              workImages={work.workImages}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
