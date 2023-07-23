'use client';

import { HStack, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

import { SectionTitle } from './SectionTitle';
import { Asset, Tag, User } from '@/db/schema';

const inter = Inter({ weight: '600', subsets: ['latin'] });

type OverviewProps = {
  title: string;
  categoryName: string;
  creators: User[];
  assets?: Asset[];
  tags?: Tag[];
};

type LabelProps = {
  label: string;
};

type ContentProps = {
  content: string;
};

const Label = ({ label }: LabelProps) => {
  return (
    <label
      className={clsx(
        inter.className,
        css`
          font-size: 0.875rem;
          width: 40%;
          line-height: 28px;
          letter-spacing: 0.14em;
        `,
      )}
    >
      {label}
    </label>
  );
};

const Content = ({ content }: ContentProps) => {
  return (
    <span
      className={css`
        font-size: 0.875rem;
        width: 60%;
        line-height: 28px;
        letter-spacing: 0.08em;
        word-break: keep-all;
      `}
    >
      {content}
    </span>
  );
};

export const Overview = ({
  title,
  categoryName,
  creators,
  assets,
  tags,
}: OverviewProps) => {
  return (
    <section>
      <SectionTitle title='OVERVIEW' />
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
          max-width: 680px;
          margin: 48px auto 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        {/* title */}
        <HStack width={'100%'} gap={32}>
          <Label label='Title' />
          <Content content={title} />{' '}
        </HStack>
        {/* title end */}
        {/* category */}
        <HStack width={'100%'} gap={32}>
          <Label label='Category' />
          <Content content={categoryName} />
        </HStack>
        {/* category end */}
        {/* creators */}
        <HStack width={'100%'} gap={32}>
          <Label label='Creators' />
          <Content content='クリエイター名, クリエイター名, クリエイター名, クリエイター名,' />
        </HStack>
        {/* creators end */}
        {/* assets */}
        {assets && (
          <HStack width={'100%'} gap={32}>
            <Label label='Assets' />
            <Content content={assets.map((asset) => asset.name).join(' , ')} />
          </HStack>
        )}
        {/* assets end */}
        {/* tags */}
        {tags && (
          <HStack width={'100%'} gap={32}>
            <Label label='Tags' />
            <Content content={tags.map((tag) => tag.name).join(' , ')} />
          </HStack>
        )}
        {/* tags end */}
      </motion.div>
    </section>
  );
};
