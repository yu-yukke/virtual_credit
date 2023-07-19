import { Heading, css } from '@kuma-ui/core';
import { Redis } from '@upstash/redis';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import { SVGProps } from 'react';

import { CardViewCount } from './CardViewCount';
import { Category, Work, WorkImage } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type WorkCardProps = {
  work: Work;
  category: Category;
  workImages: WorkImage[];
};

export function MdiEye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z'
      ></path>
    </svg>
  );
}

export const revalidate = 60;

export const WorkCard = async ({
  work,
  category,
  workImages,
}: WorkCardProps) => {
  const mainImage = workImages[0];
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
      <figure
        className={css`
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow:
            0px 2px 4px 0px rgba(23, 13, 13, 0.04),
            0px 1px 2px -1px rgba(23, 13, 13, 0.08),
            0px 0px 0px 1px rgba(23, 13, 13, 0.08);
          transition: all 0.6s;
        `}
      >
        <Image
          fill
          priority
          src={mainImage.imageUrl}
          alt={`${work.name}の画像`}
          sizes='100%'
          className={css`
            object-fit: cover;
            transition: all 0.6s;
          `}
        />
        <CardViewCount viewCount={viewCount} />
      </figure>
      <Heading
        as='h2'
        fontSize={'1rem'}
        mt={12}
        className={notoSansJp500.className}
      >
        {work.name}
      </Heading>
      <p
        className={css`
          color: #777272;
          font-size: 0.75rem;
          margin-top: 4px;
        `}
      >
        {category.name}
      </p>
    </>
  );
};
