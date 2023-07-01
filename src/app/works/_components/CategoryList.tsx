'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Category } from '@/db/schema';

type CategoryListProps = {
  categories: Category[];
};

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

export const CategoryList = ({ categories }: CategoryListProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.checked
      ? setCheckedItems([...checkedItems, e.target.value])
      : setCheckedItems(
          checkedItems.filter((item) => item.match(e.target.value) === null),
        );

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

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
        <CheckBoxButton
          id='all'
          value={'all'}
          label='すべて'
          onChange={handleChange}
        />
      </motion.li>
      {categories.map((category) => (
        <motion.li key={category.id} variants={variantList}>
          <CheckBoxButton
            id={`id_${category.id}`}
            value={category.id}
            label={category.name}
            onChange={handleChange}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
