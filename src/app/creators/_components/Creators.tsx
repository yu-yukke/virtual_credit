import { Grid, css } from '@kuma-ui/core';
import Link from 'next/link';

import { CreatorCard } from '@/components/elements/CreatorCard';
import { Job, JobMapping, User } from '@/db/schema';

type CreatorsProps = {
  creators: (User & { jobMappings: (JobMapping & { job: Job })[] })[];
};

export const Creators = async ({ creators }: CreatorsProps) => {
  return (
    <Grid
      as='ul'
      gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
      gap={32}
    >
      {creators.map((creator) => (
        <li
          className={css`
            grid-column: auto;
          `}
          key={creator.id}
        >
          <Link href={`/creators/${creator.id}`}>
            <CreatorCard creator={creator} jobMappings={creator.jobMappings} />
          </Link>
        </li>
      ))}
    </Grid>
  );
};
