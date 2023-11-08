import { Box, Grid, HStack, VStack, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Summary, WorkImages } from './_components';
import { ReportView } from '@/components/common';
import prisma from '@/lib/prisma';

type Props = {
  id: string;
};

export default async function Page({ params }: { params: Props }) {
  const work = await prisma.work.findUnique({
    where: {
      id: params.id,
    },
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
        take: 1,
      },
    },
  });

  if (!work) {
    return (
      <>
        <Grid
          as='section'
          className={css`
            grid-template-columns: 1fr min(1024px, 100%) 1fr;
          `}
        >
          <Skeleton
            width={'100%'}
            height={'auto'}
            className={css`
              aspect-ratio: 16 / 9;
              transform: inherit;
            `}
          />
        </Grid>
        <Grid
          as='section'
          mt={48}
          className={css`
            grid-template-columns: 1fr min(400px, 100%) 1fr;
          `}
        >
          <Skeleton variant='rounded' width={'100%'} height={40} />
          <Skeleton
            variant='rounded'
            width={'30%'}
            height={14}
            className={css`
              margin-top: 4px;
            `}
          />
          <Skeleton
            variant='rounded'
            width={'100%'}
            height={128}
            className={css`
              margin-top: 32px;
            `}
          />
          <VStack mt={64} gap={24}>
            {Array.from({ length: 3 }).map((_, i) => (
              <HStack key={i} gap={48}>
                <Skeleton variant='rounded' width={'100%'} height={14} />
                <Skeleton variant='rounded' width={'100%'} height={14} />
              </HStack>
            ))}
          </VStack>
        </Grid>
        <Grid
          as='section'
          mt={80}
          className={css`
            grid-template-columns: 1fr min(816px, 100%) 1fr;
          `}
        >
          <VStack gap={48}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                variant='rounded'
                width={'100%'}
                height={'auto'}
                className={css`
                  aspect-ratio: 16 / 9;
                `}
              />
            ))}
          </VStack>
        </Grid>
      </>
    );
  }

  if (!!work.histories.length && !work.histories[0].published) {
    return redirect('/works');
  }

  return (
    <>
      <ReportView slug={`${process.env.NODE_ENV}/works-${work.id}`} />
      <Grid
        as='section'
        className={css`
          grid-template-columns: 1fr min(1024px, 100%) 1fr;
        `}
      >
        <Box
          position={'relative'}
          width={'100%'}
          height={'auto'}
          className={css`
            aspect-ratio: 16 / 9;
          `}
        >
          <Image
            src={work.workImages[0].url}
            alt='作品メインイメージ'
            fill
            priority
            className={css`
              object-fit: cover;
            `}
          />
        </Box>
      </Grid>
      <Summary work={work} />
      <WorkImages work={work} />
    </>
  );
}
