'use client';

import { css } from '@kuma-ui/core';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 48px;
          gap: 8px;
        `}
      >
        {assets.map((asset) => (
          <Link href={asset.url} key={asset.id} target='_blank'>
            <span
              className={css`
                font-size: 0.875rem;
              `}
            >
              {asset.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
