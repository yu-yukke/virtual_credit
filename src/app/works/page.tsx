import { Spacer, VStack } from '@kuma-ui/core';

import { Categories, Tags, WorkList } from './_components';
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
      <WorkList works={works} />
    </>
  );
}
