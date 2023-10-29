import { Box, Grid, css } from '@kuma-ui/core';
import { Redis } from '@upstash/redis/nodejs';
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
      },
      copyrights: {
        include: {
          userCopyrights: {
            include: {
              user: true,
            },
          },
          anonymousUserCopyrights: {
            include: {
              anonymousUser: true,
            },
          },
        },
      },
      workCategories: {
        include: {
          category: true,
        },
      },
      workTags: {
        include: {
          tag: true,
        },
      },
      workRelationCategories: {
        include: {
          workRelations: true,
        },
      },
    },
  });

  if (!work || (!!work.histories.length && !work.histories[0].published)) {
    return redirect('/works');
  }

  const categories = [
    ...new Set(
      work.workCategories.map((workCategory) => workCategory.category),
    ),
  ];
  const tags = [...new Set(work.workTags.map((workTag) => workTag.tag))];
  const workImages = work.workImages.slice(1);
  const redis = Redis.fromEnv();
  const viewCount =
    (await redis.get<number>(
      [
        'pageviews',
        'projects',
        `${process.env.NODE_ENV}/works-${work.id}`,
      ].join(':'),
    )) ?? 0;

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
            objectFit='cover'
          />
        </Box>
      </Grid>
      <Summary
        viewCount={viewCount}
        latestWorkHistory={work.histories[0]}
        copyrights={work.copyrights}
        categories={categories}
        tags={tags}
        workRelationCategories={work.workRelationCategories}
      />
      {!!workImages.length && <WorkImages workImages={workImages} />}
    </>
  );
}
