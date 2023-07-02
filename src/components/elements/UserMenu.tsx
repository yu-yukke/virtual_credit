import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { css } from '../../../styled-system/css';

import { SignInBtn } from './SignInBtn';
import { SignUpBtn } from './SignUpBtn';

type UserMenuProps = {
  isGlobalNav?: boolean;
};

export const UserMenu = ({ isGlobalNav }: UserMenuProps) => {
  return (
    <>
      <SignedIn>
        <div className={css({ position: 'relative' })}></div>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <ul
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          })}
        >
          <li>
            <SignInBtn isGlobalNav={isGlobalNav} />
          </li>
          <li>
            <SignUpBtn isGlobalNav={isGlobalNav} />
          </li>
        </ul>
      </SignedOut>
    </>
  );
};
