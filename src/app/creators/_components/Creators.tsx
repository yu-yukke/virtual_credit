import classNames from 'classnames';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { CreatorCard } from '@/components/elements/CreatorCard';
import {
  CreatorMapping,
  Job,
  JobMapping,
  User,
  Work,
  WorkImage,
} from '@/db/schema';

type CreatorsProps = {
  creators: (User & { jobMappings: (JobMapping & { job: Job })[] })[];
};

export const Creators = async ({ creators }: CreatorsProps) => {
  return (
    <ul
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
      })}
    >
      {creators.map((creator) => (
        <li
          className={classNames(
            'group',
            css({
              gridColumn: 'auto',
            }),
          )}
          key={creator.id}
        >
          <Link href={`/creators/${creator.id}`}>
            <CreatorCard creator={creator} jobMappings={creator.jobMappings} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
