import { Grid, Heading, Text, VStack, css } from '@kuma-ui/core';
import { Work, WorkHistory } from '@prisma/client';

import { Categories } from './categories';
import { Copyrights } from './copyrights';
import { PageViewCount } from './page-view-count';
import { Tags } from './tags';
import { WorkRelationCategories } from './work-relation-categories';
import { Merge } from '@/types/merge';

type Props = {
  work: Merge<
    Work,
    {
      histories: WorkHistory[];
    }
  >;
};

export const Summary = ({ work }: Props) => {
  const latestWorkHistory = work.histories[0];

  return (
    <Grid
      as='section'
      mt={48}
      className={css`
        grid-template-columns: 1fr min(400px, 100%) 1fr;
      `}
    >
      <Heading
        as='h1'
        fontSize={'2.25rem'}
        fontWeight={700}
        letterSpacing={'0.0675rem'}
        className={css`
          background: linear-gradient(
            90deg,
            rgba(45, 45, 46, 0.45) -106.51%,
            #2d2d2e 210.59%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        {latestWorkHistory.title}
      </Heading>
      <PageViewCount work={work} />
      <Text
        as='p'
        letterSpacing={'0.03rem'}
        whiteSpace={'pre-wrap'}
        lineHeight={1.625}
        mt={32}
      >
        {latestWorkHistory.description}
      </Text>
      <VStack mt={64} gap={24}>
        <Copyrights work={work} />
        <Categories work={work} />
        <Tags work={work} />
        <WorkRelationCategories work={work} />
      </VStack>
    </Grid>
  );
};
