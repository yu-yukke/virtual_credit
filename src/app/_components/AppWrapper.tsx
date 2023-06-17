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
        minH: 'screen',
      })}
    >
      <div
        className={css({
          h: '99px',
        })}
      />
      <Header offset={position} />
      <main
        className={css({
          display: 'grid',
          gridColumn: 12,
          mx: 'auto',
          px: '100px',
          py: '4rem',
          gap: 5,
          maxW: '1440px',
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
