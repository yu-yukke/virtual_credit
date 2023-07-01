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

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
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
      {title}
    </motion.h3>
  );
};
