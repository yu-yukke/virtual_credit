import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';
import NextImage from 'next/image';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { Work, WorkImage } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type Props = {
  works: (Work & { workImages: WorkImage[] })[];
};

export const WorkList = ({ works }: Props) => {
  return (
    <ul
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
      })}
    >
      {works.map((work) => (
        <li className='group' key={work.id}>
          <Link href='#'>
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
              <NextImage
                fill
                priority
                src={work.workImages[0].imageUrl}
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
          </Link>
        </li>
      ))}
    </ul>
  );
};
