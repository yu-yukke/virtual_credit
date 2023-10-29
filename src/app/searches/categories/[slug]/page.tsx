import { Spacer, VStack } from '@kuma-ui/core';
import { WorkList } from './_components';
import { Categories, Tags } from '@/app/works/_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

type Props = {
  slug: string;
};

export default async function Page({ params }: { params: Props }) {
  const filteredWorks = await prisma.work.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      workCategories: {
        some: {
          category: {
            name: params.slug,
          },
        },
      },
    },
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workCategories: {
        include: {
          category: true,
        },
      },
    },
  });
  const works = await filteredWorks.filter(
    (work) => !!work.histories.length && work.histories[0].published,
  );

  return (
    <>
      <PageHeadingWrapper
        title={`${decodeURI(params.slug)}`}
        description={`A collection of ${works.length} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Categories categoryName={params.slug} />
        <Tags />
      </VStack>
      <WorkList categoryName={params.slug} />
    </>
  );
}
