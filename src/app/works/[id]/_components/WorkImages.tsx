'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';
import Image from 'next/image';
import { css } from '../../../../../styled-system/css';
import { Property } from '../../../../../styled-system/types/csstype';

import { WorkImage } from '@/db/schema';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  title: string;
  images: WorkImage[];
};

export const WorkImages = ({ title, images }: Props) => {
  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
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
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={css({
          w: 'full',
          position: 'relative',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          mt: 48,
          gap: 48,
        })}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            fill
            src={image.imageUrl}
            alt={`${title}の画像`}
            sizes='100%'
            className={css({
              objectFit: 'contain',
              position: 'relative!' as Property.Position,
              maxH: '560px',
            })}
          />
        ))}
      </motion.div>
    </section>
  );
};
