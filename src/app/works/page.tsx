import { Spacer, VStack } from '@kuma-ui/core';

import { Suspense } from 'react';
import {
  Categories,
  SkeletonCategories,
  SkeletonTags,
  SkeletonWorkList,
  Tags,
  WorkList,
} from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

export default async function Page() {
  const worksWithHistories = await prisma.work.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
  const works = await worksWithHistories.filter(
    (work) => !!work.histories.length && work.histories[0].published,
  );

  return (
    <>
      <PageHeadingWrapper
        title='Works'
        description={`A collection of ${works.length} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Suspense fallback={<SkeletonCategories />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<SkeletonTags />}>
          <Tags />
        </Suspense>
      </VStack>
      <Suspense fallback={<SkeletonWorkList />}>
        <WorkList />
      </Suspense>
    </>
  );
}
