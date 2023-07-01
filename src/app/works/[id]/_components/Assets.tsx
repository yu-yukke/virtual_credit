'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { css } from '../../../../../styled-system/css';

import { SectionTitle } from './SectionTitle';
import { Asset } from '@/db/schema';

type AssetProps = {
  assets: Asset[];
};

export const Assets = ({ assets }: AssetProps) => {
  return (
    <section>
      <SectionTitle title='ASSETS' />
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
