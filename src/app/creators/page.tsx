import { Spacer } from '@kuma-ui/core';

import { CreatorList, Skills } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';

import prisma from '@/lib/prisma';

export default async function Page() {
  const creators = await prisma.user.findMany({
    where: {
      published: true,
    },
  });

  return (
    <>
      <PageHeadingWrapper
        title='Creators'
        description={`A collection of ${creators.length} creators`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <Skills />
      <CreatorList />
    </>
  );
}
