'use client';

import { motion } from 'framer-motion';
import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Tag } from '@/db/schema';

type Tags = Tag[];

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

export const TagList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/tags`);
  const tags: Tags = await res.json();

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
        <CheckBoxButton id='tag_all' value={-1} label='すべて' />
      </motion.li>
      {tags.map((tag) => (
        <motion.li key={tag.id} variants={variantList}>
          <CheckBoxButton
            id={`tag_${tag.id}`}
            value={tag.id}
            label={tag.name}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
