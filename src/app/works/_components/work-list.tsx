import { Grid, css } from '@kuma-ui/core';

import { WorkCard } from '@/components/elements/cards';
import { Work } from '@/types/works';

type Props = {
  works: Work[];
};

export const WorkList = async ({ works }: Props) => {
  return (
    <Grid
      as='section'
      py={32}
      gridTemplateColumns={'repeat(auto-fit, minmax(380px, 1fr))'}
      className={css`
        grid-column-gap: 16px;
        grid-row-gap: 24px;
      `}
    >
      {works.length &&
        works.map((work) => <WorkCard key={work.id} work={work} />)}
    </Grid>
  );
};
