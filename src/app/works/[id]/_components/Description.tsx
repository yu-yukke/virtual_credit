'use client';

import { motion } from 'framer-motion';
import { css } from '../../../../../styled-system/css';
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
        className={css({
          fontSize: 'sm',
          w: 'full',
          maxW: '680px',
          margin: '48px auto 0',
          whiteSpace: 'pre-wrap',
          lineHeight: '28px',
          letterSpacing: '0.14em',
        })}
      >
        {description}
      </motion.p>
    </section>
  );
};
