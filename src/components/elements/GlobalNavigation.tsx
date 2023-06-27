'use client';

import classNames from 'classnames';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';

import { css } from '../../../styled-system/css';

import { SignInButton } from './SignInButton';
import { SignUpButton } from './SignUpButton';
import { globalNavConfig } from '@/config/globalNav';

const inter = Inter({ weight: '400', subsets: ['latin'] });

export const GlobalNavigation = () => {
  const currentPath = usePathname();
  const [position, setPosition] = useState<number>(window.scrollY);
  const breakPosition = 10;
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
    <nav
      className={classNames(
        position > breakPosition
          ? css({
              bg: 'white',
              shadow: 'float',
              gap: 6,
            })
          : css({
              _hover: {
                px: 8,
                py: 11.5,
              },
            }),
        css({
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          rounded: 'full',
          p: 8,
          transition: 'all 0.3s',
          _hover: {
            bg: 'white',
            shadow: 'float',
          },
        }),
      )}
    >
      <ul
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        })}
      >
        {globalNavConfig.navItems.map((nav) => (
          <li className={inter.className} key={nav.title}>
            <Link
              href={nav.href}
              className={classNames(
                currentPath == `${nav.href}`
                  ? css({
                      bg: '#F1F3F5',
                      border: '1px solid token(borders.primary)',
                    })
                  : css({
                      bg: 'transparent',
                      border: '1px solid transparent',
                    }),
                css({
                  color: 'secondary',
                  fontSize: '13px',
                  px: 12,
                  py: 6,
                  rounded: 'full',
                  _hover: {
                    bg: '#F1F3F5',
                    borderColor: 'token(borders.primary)',
                  },
                }),
              )}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={classNames(
          position > breakPosition
            ? css({
                w: 'auto',
                h: 'auto',
                visibility: 'visible',
                opacity: 1,
              })
            : css({ w: 0, h: 0, visibility: 'hidden', opacity: 0 }),
          css({
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            gap: 6,
            transition: 'all 1.5s',
          }),
        )}
      >
        <li>
          <SignInButton isGlobalNav />
        </li>
        <li>
          <SignUpButton isGlobalNav />
        </li>
      </ul>
    </nav>
  );
};
