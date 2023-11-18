import { Box, Spacer } from '@kuma-ui/core';

import { CreatorList } from './_components';
import { Skills } from '@/app/creators/_components';
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
  const creatorsCount = await prisma.user.count({
    where: {
      published: true,
      userSkills: {
        some: {
          skill: {
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
        description={`A collection of ${creatorsCount} creators`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <Box as='section' mt={20}>
        <Skills skillName={params.slug} />
      </Box>
      <CreatorList
        skillName={params.slug}
        page={page}
        creatorsCount={creatorsCount}
      />
    </>
  );
}
