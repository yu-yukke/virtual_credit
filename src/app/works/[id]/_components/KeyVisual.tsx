'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { css } from '../../../../../styled-system/css';
import { Property } from '../../../../../styled-system/types/csstype';

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
      className={css({
        position: 'relative',
        w: 'full',
        h: '60vh',
        gridColumn: '1 / 4',
      })}
    >
      <Image
        fill
        src={mainImageUrl}
        alt={`${title}の画像`}
        sizes='100%'
        className={css({
          objectFit: 'cover',
          position: 'relative!' as Property.Position,
        })}
      />
      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          w: 'full',
          h: 'full',
          bg: 'rgba(0, 0, 0, 0.4)',
        })}
      />
      <div
        className={css({
          w: 'full',
          px: 30,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          gap: 4,
        })}
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className={css({
            fontSize: '5xl',
            color: 'white',
            letterSpacing: 'lg',
            fontWeight: 500,
          })}
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
          className={css({
            fontSize: 'md',
            color: 'white',
          })}
        >
          {categoryName}
        </motion.h2>
      </div>
    </motion.div>
  );
};
