import { HStack, css } from '@kuma-ui/core';
import { Redis } from '@upstash/redis/nodejs';
import clsx from 'clsx';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Work } from '@/db/schema';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

type ViewCountProps = {
  work: Work;
};

export function MdiEye() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      style={{ fontSize: '1.125rem' }}
    >
      <path
        fill='#aeaeae'
        d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z'
      ></path>
    </svg>
  );
}

export const CardViewCount = async ({ work }: ViewCountProps) => {
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
    <HStack
      alignItems={'center'}
      gap={8}
      px={12}
      py={6}
      borderRadius={'0.5rem'}
      bg={'rgba(32, 32, 30, 0.6)'}
    >
      <MdiEye />
      <span
        className={clsx(
          jakartaSans.className,
          css`
            color: #aeaeae;
            font-size: 0.875rem;
          `,
        )}
      >
        {viewCount}
      </span>
    </HStack>
  );
};
