'use client';

import { css } from '@kuma-ui/core';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

type DescriptionProps = {
  description: string;
};

export const Description = ({ description }: DescriptionProps) => {
  return (
    <section>
      <SectionTitle title='DESCRIPTION' />
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={css`
          font-size: 0.875rem;
          width: 100%;
          max-width: 680px;
          margin: 48px auto 0;
          white-space: pre-wrap;
          line-height: 28px;
          letter-spacing: 0.14em;
        `}
      >
        {description}
      </motion.p>
    </section>
  );
};
