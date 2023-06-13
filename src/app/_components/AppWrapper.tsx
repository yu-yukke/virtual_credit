'use client';

import { useState, useEffect, useCallback } from 'react';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: Props) => {
  const [position, setPosition] = useState<number>(0);

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    setPosition(offset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <div className='flex flex-col items-stretch min-h-screen'>
      <div className='h-[99px] w-full' />
      <Header offset={position} />
      <main className='w-full p-16 mx-auto max-w-screen-2xl h-[2000px]'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
