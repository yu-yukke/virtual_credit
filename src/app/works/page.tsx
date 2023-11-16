import { Spacer, VStack } from '@kuma-ui/core';

import { Categories, Tags, WorkList } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';

import prisma from '@/lib/prisma';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams['page'] || 1);
  const worksCount = await prisma.work.count({
    where: {
      published: true,
    },
  });

  return (
    <>
      <PageHeadingWrapper
        title='Works'
        description={`A collection of ${worksCount} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Categories />
        <Tags />
      </VStack>
      <WorkList page={page} />
    </>
  );
}
