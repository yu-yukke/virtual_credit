'use client';

import { motion } from 'framer-motion';
import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Category } from '@/db/schema';

type Categories = Category[];

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

export const CategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/categories`);
  const categories: Categories = await res.json();

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
        <CheckBoxButton id='category_all' value={-1} label='すべて' />
      </motion.li>
      {categories.map((category) => (
        <motion.li key={category.id} variants={variantList}>
          <CheckBoxButton
            id={`category_${category.id}`}
            value={category.id}
            label={category.name}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
