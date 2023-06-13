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
          ? 'shadow-header bg-white py-0 bg-opacity-50'
          : 'py-4',
        'fixed top-0 left-0 z-10 w-full px-8 transition-all border-b border-gray-200 backdrop-blur',
      )}
      ref={headerRef}
    >
      <div className='flex items-center justify-between w-full h-full gap-8 mx-auto min-h-[66px] max-w-screen'>
        <Link href='/'>
          <h1 className='text-lg font-normal tracking-[.22em] leading-tight font-GillSans hover:opacity-80'>
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
          <div className='flex items-center gap-2'>
            <SignInButton mode='modal'>
              <button className='px-4 py-1.5 tracking-wider hover:opacity-80'>
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <button className='px-4 py-1.5 tracking-wider text-white rounded-md bg-zinc-700 shadow hover:opacity-80'>
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </header>
  );
};
