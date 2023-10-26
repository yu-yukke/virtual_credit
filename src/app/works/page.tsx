import { Grid, Spacer, VStack, css } from '@kuma-ui/core';

import { Categories, Tags } from './_components';
import { WorkCard } from '@/components/elements/cards';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import { Work } from '@/types/works';

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/works`, {
    method: 'GET',
  });
  const works: Work[] = await response.json();

  return (
    <>
      <PageHeadingWrapper
        title='Works'
        description={`A collection of ${works.length} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' py={20}>
        <Categories />
        <Tags />
      </VStack>
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
    </>
  );
}
