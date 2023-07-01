'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { css } from '../../../../../styled-system/css';
import { Property } from '../../../../../styled-system/types/csstype';

import { SectionTitle } from './SectionTitle';
import { WorkImage } from '@/db/schema';

type WorkImageProps = {
  title: string;
  images: WorkImage[];
};

export const WorkImages = ({ title, images }: WorkImageProps) => {
  return (
    <section>
      <SectionTitle title='IMAGES' />
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
