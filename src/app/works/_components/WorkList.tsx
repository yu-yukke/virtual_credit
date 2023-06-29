import classNames from 'classnames';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { WorkCard } from '@/components/elements/WorkCard';
import { Work, WorkImage } from '@/db/schema';

type Props = {
  works: (Work & { workImages: WorkImage[] })[];
};

export const WorkList = ({ works }: Props) => {
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
            <WorkCard work={work} mainImage={work.workImages[0]} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
