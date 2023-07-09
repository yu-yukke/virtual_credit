import { Redis } from '@upstash/redis';
import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import { css } from '../../../styled-system/css';

import { Work, WorkImage } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type WorkCardProps = {
  work: Work;
  mainImage: WorkImage;
};

export const revalidate = 60;

export const WorkCard = async ({ work, mainImage }: WorkCardProps) => {
  const redis = Redis.fromEnv();
  const views =
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
          transition: 'all 0.3s',
          _groupHover: {
            shadow: 'floatHover',
            transform: 'translateY(-4px)',
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
          })}
        />
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
    </>
  );
};
