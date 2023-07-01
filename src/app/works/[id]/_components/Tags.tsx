'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { css } from '../../../../../styled-system/css';

import { SectionTitle } from './SectionTitle';
import { Tag } from '@/db/schema';

type TagProps = {
  tags: Tag[];
};

export const Tags = ({ tags }: TagProps) => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
      })}
    >
      <SectionTitle title='TAGS' />
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
