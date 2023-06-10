import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

import { SearchBar } from '../elements/SearchBar';

export const Header = () => {
  return (
    <header className='flex items-center bg-red-100'>
      <h1>Header</h1>
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
