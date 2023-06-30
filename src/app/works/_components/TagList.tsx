'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Noto_Sans_JP } from 'next/font/google';
import { css } from '../../../../styled-system/css';

import { Tag } from '@/db/schema';

type Props = {
  tags: Tag[];
};

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const variantList = {
  hidden: {
    opacity: 0,
    x: 8,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const TagList = ({ tags }: Props) => {
  return (
    <motion.ul
      variants={variants}
      initial='hidden'
      animate='show'
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      })}
    >
      <motion.li variants={variantList}>
        <button
          className={classNames(
            notoSansJp500.className,
            css({
              fontSize: 'xs',
              color: 'primary',
              py: 4,
              px: 12,
              rounded: 'full',
              bg: 'bgActive',
              border: '1px solid token(borders.primary)',
            }),
          )}
        >
          すべて
        </button>
      </motion.li>
      {tags.map((tag) => (
        <motion.li key={tag.id} variants={variantList}>
          <button
            className={css({
              fontSize: 'xs',
              color: 'secondary',
              py: 4,
              px: 12,
              rounded: 'xl',
            })}
          >
            # {tag.name}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};
