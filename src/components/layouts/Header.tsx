'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import classNames from 'classnames';
import Link from 'next/link';
import { useRef } from 'react';

import { css } from '../../../styled-system/css';

import { GlobalSearch } from '../elements/GlobalSearch';

type Props = {
  offset: number;
};

export const Header = ({ offset }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = headerRef.current?.getBoundingClientRect()
    .height as number;

  return (
    <header
      className={classNames(
        headerHeight < offset
          ? css({ bg: 'rgba(255, 255, 255, 0.5)', py: 0, shadow: 'header' })
          : css({ py: 16 }),
        css({
          w: 'full',
          maxH: 'headerHeight',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
          px: 32,
          transition: 'all 0.15s',
          borderBottom: '1px solid token(borders.primary)',
          backdropFilter: 'blur(9px)',
        }),
      )}
      ref={headerRef}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          w: 'full',
          maxW: 'screen',
          h: 'full',
          minH: '66px',
          mx: 'auto',
        })}
      >
        <Link href='/'>
          <h1
            className={css({
              fontFamily: 'gillSans',
              fontSize: 'large',
              letterSpacing: '0.22em',
              lineHeight: '1.6rem',
            })}
          >
            VIRTUAL
            <br />
            CREDIT
          </h1>
        </Link>
        <GlobalSearch />
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            })}
          >
            <SignInButton mode='modal'>
              <button
                className={css({
                  px: 16,
                  py: 6,
                  letterSpacing: 'base',
                  _hover: {
                    opacity: 0.8,
                  },
                })}
              >
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <button
                className={css({
                  px: 16,
                  py: 6,
                  letterSpacing: 'base',
                  color: 'white',
                  bg: 'primary',
                  rounded: 'md',
                  shadow: 'sm',
                  _hover: {
                    opacity: 0.8,
                  },
                })}
              >
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </header>
  );
};
