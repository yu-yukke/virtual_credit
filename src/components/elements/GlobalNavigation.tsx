'use client';

import { SignedOut } from '@clerk/nextjs';
import { Box, HStack, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';

import { SignUpBtn } from './SignUpBtn';
import { globalNavConfig } from '@/config/navigation';

const inter = Inter({ weight: '400', subsets: ['latin'] });

export const GlobalNavigation = () => {
  const currentPath = usePathname();
  const [position, setPosition] = useState<number>(0);
  const breakPosition = 10;
  const scrollEvent = useCallback(() => {
    const offset = window.scrollY;

    setPosition(offset);
  }, []);

  useEffect(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <Box
      as={'nav'}
      display={'flex'}
      alignItems={'center'}
      position={'fixed'}
      left={'50%'}
      transform={'translateX(-50%)'}
      borderRadius={9999}
      px={12}
      py={8}
      transition={'all 0.3s'}
      zIndex={10}
      _hover={{
        bg: 'white',
        boxShadow:
          '0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08)',
      }}
      className={
        position > breakPosition
          ? css`
              background: white;
              box-shadow:
                0px 2px 4px 0px rgba(23, 13, 13, 0.04),
                0px 1px 2px -1px rgba(23, 13, 13, 0.08),
                0px 0px 0px 1px rgba(23, 13, 13, 0.08);
              gap: 6px;
            `
          : css`
              &:hover {
                padding: 8px 12px;
              },
            `
      }
    >
      <HStack as='ul' alignItems='center' gap={6}>
        {globalNavConfig.navItems.map((nav) => (
          <li className={inter.className} key={nav.title}>
            <Link
              href={nav.href}
              className={clsx(
                currentPath == `${nav.href}`
                  ? css`
                      background: #f1f3f5;
                      border: 1px solid #e8e8e8;
                    `
                  : css`
                      background: transparent;
                      border: 1px solid transparent;
                    `,
                css`
                  display: inline-block;
                  color: #777272;
                  font-size: 13px;
                  letter-spacing: 0.03em;
                  padding: 6px 12px;
                  border-radius: 9999px;
                  &:hover {
                    background: #F1F3F5;
                    border-color: #E8E8E8;
                  },
                `,
              )}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </HStack>
      <SignedOut>
        <Box
          overflow={'hidden'}
          gap={6}
          transition={'all 1.5s'}
          className={
            position > breakPosition
              ? css`
                  width: auto;
                  height: auto;
                  visibility: visible;
                  opacity: 1;
                `
              : css`
                  width: 0;
                  height: 0;
                  visibility: hidden;
                  opacity: 0;
                `
          }
        >
          <SignUpBtn isFullRounded />
        </Box>
      </SignedOut>
    </Box>
  );
};
