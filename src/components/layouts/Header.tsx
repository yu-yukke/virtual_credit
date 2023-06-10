import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

import { SearchBar } from '../elements/SearchBar';

export const Header = () => {
  return (
    <header className='flex items-center bg-red-100'>
      <Link href='/'>
        <h1>Virtual Credit</h1>
      </Link>
      <SearchBar />
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
    </header>
  );
};
