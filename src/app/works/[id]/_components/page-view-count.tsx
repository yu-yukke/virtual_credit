import { Text } from '@kuma-ui/core';
import { Work } from '@prisma/client';
import { Redis } from '@upstash/redis/nodejs';

type Props = {
  work: Work;
};

export const PageViewCount = async ({ work }: Props) => {
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
    <Text mt={4} color={'colors.tertiary'} fontSize={'0.875rem'}>
      {viewCount} views
    </Text>
  );
};
