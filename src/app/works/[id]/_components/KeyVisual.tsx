'use client';

import { Box, VStack, css } from '@kuma-ui/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

type KeyVisualProps = {
  title: string;
  categoryName: string;
  mainImageUrl: string;
};

export const KeyVisual = ({
  title,
  categoryName,
  mainImageUrl,
}: KeyVisualProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className={css`
        position: relative;
        width: 100%;
        height: 60vh;
        grid-column: 1 / 4;
      `}
    >
      <Image
        fill
        src={mainImageUrl}
        alt={`${title}の画像`}
        sizes='100%'
        className={css`
          object-fit: cover;
          position: relative !important;
        `}
      />
      <Box
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100%'}
        height={'100%'}
        bg={'rgba(0, 0, 0, 0.4)'}
      />
      <VStack
        width={'100%'}
        px={30}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        alignItems={'center'}
        gap={4}
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className={css`
            font-size: 3rem;
            color: white;
            letter-spacing: 0.06em;
            font-weight: 500;
          `}
        >
          {title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={css`
            font-size: 1rem;
            color: white;
          `}
        >
          {categoryName}
        </motion.h2>
      </VStack>
    </motion.div>
  );
};
