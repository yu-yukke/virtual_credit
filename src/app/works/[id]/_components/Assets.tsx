'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';
import { css } from '../../../../../styled-system/css';

import { Asset } from '@/db/schema';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  assets: Asset[];
};

export const Assets = ({ assets }: Props) => {
  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
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
        ASSETS
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
          w: 'full',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          mt: 48,
          gap: 8,
        })}
      >
        {assets.map((asset) => (
          <Link href={asset.url} key={asset.id} target='_blank'>
            <span className={css({ fontSize: 'sm' })}>{asset.name}</span>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
