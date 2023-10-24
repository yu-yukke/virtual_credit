import { Spacer, VStack } from '@kuma-ui/core';

import { Categories, Tags } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';

export default async function Page() {
  return (
    <>
      <PageHeadingWrapper
        title='Works'
        description='A collection of 75 works'
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack py={20}>
        <Categories />
        <Tags />
      </VStack>
    </>
  );
}
