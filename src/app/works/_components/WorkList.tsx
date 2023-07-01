'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import { WorkCard } from '@/components/elements/WorkCard';
import { Work, WorkImage } from '@/db/schema';

type WorkListProps = {
  works: (Work & { workImages: WorkImage[] })[];
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 1,
    },
  },
};

export const WorkList = ({ works }: WorkListProps) => {
  return (
    <motion.ul
      variants={variants}
      initial='hidden'
      animate='show'
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
      })}
    >
      {works.map((work) => (
        <motion.li
          variants={variantList}
          className={classNames(
            'group',
            css({
              gridColumn: 'auto',
            }),
          )}
          key={work.id}
        >
          <Link href={`/works/${work.id}`}>
            <WorkCard work={work} mainImage={work.workImages[0]} />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
