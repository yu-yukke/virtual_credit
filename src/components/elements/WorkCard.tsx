import { Redis } from '@upstash/redis';
import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import { SVGProps } from 'react';
import { css } from '../../../styled-system/css';

import { CardViewCount } from './CardViewCount';
import { Category, Work, WorkImage } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type WorkCardProps = {
  work: Work & { category: Category } & { workImages: WorkImage[] };
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

export const WorkCard = async ({ work }: WorkCardProps) => {
  const category = work.category;
  const mainImage = work.workImages[0];
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
        className={css({
          position: 'relative',
          w: 'full',
          h: 'auto',
          aspectRatio: 'wide',
          rounded: 'xl',
          overflow: 'hidden',
          shadow: 'float',
          transition: 'all 0.6s',
          _groupHover: {
            shadow: 'floatHover',
          },
        })}
      >
        <Image
          fill
          priority
          src={mainImage.imageUrl}
          alt={`${work.name}の画像`}
          sizes='100%'
          className={css({
            objectFit: 'cover',
            transition: 'all 0.6s',
            _groupHover: {
              transform: 'scale(1.08)',
            },
          })}
        />
        <CardViewCount viewCount={viewCount} />
      </figure>
      <h2
        className={classNames(
          notoSansJp500.className,
          css({
            fontSize: 'md',
            mt: 12,
            letterSpacing: 'lg',
          }),
        )}
      >
        {work.name}
      </h2>
      <p
        className={css({
          color: 'secondary',
          fontSize: 'xs',
          mt: 4,
        })}
      >
        {category.name}
      </p>
    </>
  );
};
