'use client';

import { useState, useEffect, useCallback } from 'react';

import { css } from '../../../styled-system/css';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: Props) => {
  const [position, setPosition] = useState<number>(0);

  const scrollEvent = useCallback(() => {
    const offset = window.scrollY;

    setPosition(offset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'stretch',
        minH: 'screen',
      })}
    >
      <div
        className={css({
          h: 'headerHeight',
        })}
      />
      <Header offset={position} />
      <main
        className={css({
          w: 'full',
          mx: 'auto',
          px: 'baseX',
          py: 'baseY',
          maxW: 'base',
          flex: '1 1 0',
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
