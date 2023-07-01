'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';
import { css } from '../../../../../styled-system/css';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  description: string;
};

export const Description = ({ description }: Props) => {
  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
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
        DESCRIPTION
      </motion.h3>
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
