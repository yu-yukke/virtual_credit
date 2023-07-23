'use client';

import { css } from '@kuma-ui/core';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className={clsx(
        robotoCondensed.className,
        css`
          color: #323232;
          font-size: 1.125rem;
          letter-spacing: 0.38em;
          text-align: center;
        `,
      )}
    >
      {title}
    </motion.h3>
  );
};
