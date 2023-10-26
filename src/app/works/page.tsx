import { Spacer, VStack } from '@kuma-ui/core';

import { Categories, Tags, WorkList } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';
import { Work } from '@/types/works';

export default async function Page() {
  const worksWithHistories = await prisma.work.findMany({
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workImages: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      copyrights: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          userCopyrights: {
            include: {
              user: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
          anonymousUserCopyrights: {
            include: {
              anonymousUser: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
    },
  });
  const works = await worksWithHistories.filter(
    (work: Work) => work.histories.length > 0 && work.histories[0].published,
  );

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
