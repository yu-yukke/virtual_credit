import { Box, Spacer } from '@kuma-ui/core';

import { CreatorList } from './_components';
import { Skills } from '@/app/creators/_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';

import prisma from '@/lib/prisma';

type Props = {
  slug: string;
};

export default async function Page({ params }: { params: Props }) {
  const creators = await prisma.user.findMany({
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
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <PageHeadingWrapper
        title={decodeURI(params.slug)}
        description={`A collection of ${creators.length} creators`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <Box as='section' mt={20}>
        <Skills skillName={params.slug} />
      </Box>
      <CreatorList skillName={params.slug} />
    </>
  );
}
