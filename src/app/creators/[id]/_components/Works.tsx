import { Grid, css } from '@kuma-ui/core';
import Link from 'next/link';

import { CardViewCount } from '@/components/elements/CardViewCount';
import { WorkCard } from '@/components/elements/WorkCard';
import { Category, Work, WorkImage } from '@/db/schema';

type WorksProps = {
  works: (Work & { category: Category } & { workImages: WorkImage[] })[];
};

export const Works = ({ works }: WorksProps) => {
  return (
    <Grid
      as='ul'
      gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
      gap={32}
    >
      {works.map((work) => (
        <li
          className={css`
            grid-column: auto;
          `}
          key={work.id}
        >
          <Link href={`/works/${work.id}`}>
            <WorkCard
              work={work}
              category={work.category}
              workImages={work.workImages}
            >
              <CardViewCount work={work} />
            </WorkCard>
          </Link>
        </li>
      ))}
    </Grid>
  );
};
