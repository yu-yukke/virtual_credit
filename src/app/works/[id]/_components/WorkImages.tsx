import classNames from 'classnames';
import { Roboto_Condensed } from 'next/font/google';
import Image from 'next/image';
import { css } from '../../../../../styled-system/css';
import { WorkImage } from '@/db/schema';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  workName: string;
  images: WorkImage[];
};

export const WorkImages = ({ workName, images }: Props) => {
  return (
    <section>
      <h3
        className={classNames(
          robotoCondensed.className,
          css({
            color: 'tertiary',
            fontSize: 'xl',
            letterSpacing: '0.38em',
            textAlign: 'center',
          }),
        )}
      >
        IMAGES
      </h3>
      <div
        className={css({
          w: 'full',
          display: 'flex',
          flexDir: 'column',
          mt: 48,
          gap: 48,
        })}
      >
        {images.map((image) => (
          <figure
            key={image.id}
            className={css({
              position: 'relative',
              w: 'full',
              h: 'auto',
              aspectRatio: 'wide',
              overflow: 'hidden',
            })}
          >
            <Image
              fill
              src={image.imageUrl}
              alt={`${workName}の画像`}
              sizes='100%'
              className={css({
                objectFit: 'cover',
              })}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
