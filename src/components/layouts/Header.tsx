import Link from 'next/link';
import { css } from '../../../styled-system/css';

import { GlobalNavigation } from '../elements/GlobalNavigation';
import { UserMenu } from '../elements/UserMenu';

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
        <UserMenu />
      </div>
    </header>
  );
};
