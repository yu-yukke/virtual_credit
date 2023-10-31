import { Box, Grid, VStack, css } from '@kuma-ui/core';
import { Work } from '@prisma/client';
import Image from 'next/image';
import prisma from '@/lib/prisma';

type Props = {
  work: Work;
};

export const WorkImages = async ({ work }: Props) => {
  const allWorkImages = await prisma.workImage.findMany({
    where: {
      workId: work.id,
    },
  });

  if (!allWorkImages.length) {
    return null;
  }

  const workImages = allWorkImages.slice(1);

  return (
    <Grid
      as='section'
      mt={80}
      className={css`
        grid-template-columns: 1fr min(816px, 100%) 1fr;
      `}
    >
      <VStack gap={48}>
        {workImages.map((workImage) => (
          <Box position={'relative'} key={workImage.id}>
            <Image
              src={workImage.url}
              alt='作品イメージ'
              fill
              sizes='100%'
              className={css`
                position: relative !important;
                width: auto !important;
                object-fit: contain;
              `}
            />
          </Box>
        ))}
      </VStack>
    </Grid>
  );
};
