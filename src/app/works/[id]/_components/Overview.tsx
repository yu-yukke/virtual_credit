'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { css } from '../../../../../styled-system/css';

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
      className={classNames(
        inter.className,
        css({
          fontSize: 'sm',
          w: '2/5',
          lineHeight: '28px',
          letterSpacing: '0.14em',
        }),
      )}
    >
      {label}
    </label>
  );
};

const Content = ({ content }: ContentProps) => {
  return (
    <span
      className={css({
        fontSize: 'sm',
        w: '3/5',
        lineHeight: '28px',
        letterSpacing: '0.08em',
        wordBreak: 'keep-all',
      })}
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
        className={css({
          w: 'full',
          maxW: '680px',
          margin: '48px auto 0',
          display: 'flex',
          flexDir: 'column',
          gap: 8,
        })}
      >
        {/* title */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <Label label='Title' />
          <Content content={title} />{' '}
        </div>
        {/* title end */}
        {/* category */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <Label label='Category' />
          <Content content={categoryName} />
        </div>
        {/* category end */}
        {/* creators */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <Label label='Creators' />
          <Content content='クリエイター名, クリエイター名, クリエイター名, クリエイター名,' />
        </div>
        {/* creators end */}
        {/* assets */}
        {assets && (
          <div
            className={css({
              display: 'flex',
              w: 'full',
              gap: 32,
            })}
          >
            <Label label='Assets' />
            <Content content={assets.map((asset) => asset.name).join(' , ')} />
          </div>
        )}
        {/* assets end */}
        {/* tags */}
        {tags && (
          <div
            className={css({
              display: 'flex',
              w: 'full',
              gap: 32,
            })}
          >
            <Label label='Tags' />
            <Content content={tags.map((tag) => tag.name).join(' , ')} />
          </div>
        )}
        {/* tags end */}
      </motion.div>
    </section>
  );
};
