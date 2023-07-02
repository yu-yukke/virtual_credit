import Link from 'next/link';
import { css } from '../../../styled-system/css';
import { SignedOut } from '@clerk/nextjs';

import { GlobalNavigation } from '../elements/GlobalNavigation';
import { SignInBtn } from '../elements/SignInBtn';
import { SignUpBtn } from '../elements/SignUpBtn';

export const Header = async () => {
  return (
    <header
      className={css({
        w: 'full',
        h: 'headerHeight',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns:
          '1fr min(calc(token(sizes.maxWidth) - token(spacing.baseX) * 2), calc(token(sizes.full) - 60px)) 1fr',
        '& *': {
          gridColumnStart: '2',
        },
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          w: 'full',
          h: 'full',
        })}
      >
        <Link href='/'>
          <h1
            className={css({
              fontFamily: 'futura',
              fontSize: 'xl',
              letterSpacing: '-0.05em',
            })}
          >
            VIRTUAL CREDIT
          </h1>
        </Link>
        <GlobalNavigation />
        <SignedOut>
          <ul
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            })}
          >
            <li>
              <SignInBtn />
            </li>
            <li>
              <SignUpBtn />
            </li>
          </ul>
        </SignedOut>
      </div>
    </header>
  );
};
