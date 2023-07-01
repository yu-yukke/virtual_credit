'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Roboto_Condensed } from 'next/font/google';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TumblrShareButton,
  TumblrIcon,
} from 'react-share';
import { css } from '../../../../../styled-system/css';

const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  workTitle: string;
};

export const Share = ({ workTitle }: Props) => {
  const url = window.location.href;
  const title = `クリエイターのためのポートフォリオサイトVIRTUAL CREDITで、「${workTitle}」を公開中です！`;
  const fillColor = '#FFFFFF';
  const bgColor = '#AEAEAE';

  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
      })}
    >
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
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
        SHARE
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
          w: 'auto',
          maxW: '680px',
          flexWrap: 'wrap',
          display: 'flex',
          alignItems: 'center',
          mt: 48,
          gap: 16,
        })}
      >
        <TwitterShareButton
          title={title}
          url={url}
          hashtags={['VIRTUALCREDIT']}
          related={['takamin_']}
        >
          <TwitterIcon
            size={32}
            bgStyle={{ fill: bgColor }}
            iconFillColor={fillColor}
            round
          />
        </TwitterShareButton>
        <FacebookShareButton url={url} hashtag='#VIRTUALCREDIT'>
          <FacebookIcon
            size={32}
            bgStyle={{ fill: bgColor }}
            iconFillColor={fillColor}
            round
          />
        </FacebookShareButton>
        <LineShareButton title={title} url={url}>
          <LineIcon
            size={32}
            bgStyle={{ fill: bgColor }}
            iconFillColor={fillColor}
            round
          />
        </LineShareButton>
        <TumblrShareButton title={title} url={url} tags={['VIRTUALCREDIT']}>
          <TumblrIcon
            size={32}
            bgStyle={{ fill: bgColor }}
            iconFillColor={fillColor}
            round
          />
        </TumblrShareButton>
      </motion.div>
    </section>
  );
};
