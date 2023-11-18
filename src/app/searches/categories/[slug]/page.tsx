import { Spacer, VStack } from '@kuma-ui/core';
import { WorkList } from './_components';
import { Categories, Tags } from '@/app/works/_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

type Props = {
  slug: string;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Props;
  searchParams: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams['page'] || 1);
  const worksCount = await prisma.work.count({
    where: {
      published: true,
      workCategories: {
        some: {
          category: {
            name: decodeURI(params.slug),
          },
        },
      },
    },
  });

  return (
    <>
      <PageHeadingWrapper
        title={decodeURI(params.slug)}
        description={`A collection of ${worksCount} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Categories categoryName={params.slug} />
        <Tags />
      </VStack>
      <WorkList
        categoryName={params.slug}
        page={page}
        worksCount={worksCount}
      />
    </>
  );
}
