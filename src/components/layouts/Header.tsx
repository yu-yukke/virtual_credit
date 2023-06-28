import Link from 'next/link';
import { css } from '../../../styled-system/css';

import { GlobalNavigation } from '../elements/GlobalNavigation';
import { SignInButton } from '../elements/SignInButton';
import { SignUpButton } from '../elements/SignUpButton';

export const Header = () => {
  return (
    <header
      className={css({
        w: 'full',
        maxW: 'maxWidth',
        h: 'headerHeight',
        zIndex: 10,
        px: 'baseX',
        mx: 'auto',
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
        <ul
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          })}
        >
          <li>
            <SignInButton />
          </li>
          <li>
            <SignUpButton />
          </li>
        </ul>
      </div>
    </header>
  );
};
