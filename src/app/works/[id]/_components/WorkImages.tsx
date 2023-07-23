'use client';

import { css } from '@kuma-ui/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        className={css`
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 48px;
          gap: 48px;
        `}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            fill
            src={image.imageUrl}
            alt={`${title}の画像`}
            sizes='100%'
            className={css`
              object-fit: contain;
              position: relative !important;
              max-height: 560px;
            `}
          />
        ))}
      </motion.div>
    </section>
  );
};
