'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';
import { css } from '../../../../../styled-system/css';

import { Tag } from '@/db/schema';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  tags: Tag[];
};

export const Tags = ({ tags }: Props) => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
      })}
    >
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
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
        TAGS
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
          w: 'auto',
          maxW: '680px',
          flexWrap: 'wrap',
          display: 'flex',
          alignItems: 'center',
          mt: 48,
          gap: 16,
        })}
      >
        {tags.map((tag) => (
          <Link href='/' key={tag.id}>
            <button
              className={css({
                fontSize: 'sm',
                color: 'secondary',
                py: 4,
                px: 12,
                rounded: '2xl',
                border: '1px solid token(borders.primary)',
                cursor: 'pointer',
                _hover: {
                  color: 'primary',
                },
              })}
            >
              # {tag.name}
            </button>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
