import Link from 'next/link';

import { css } from '../../../styled-system/css';

import { documentConfig } from '@/config/document';
import { mainNavConfig } from '@/config/mainNav';
import { socialConfig } from '@/config/social';

export const Footer = () => {
  return (
    <footer
      className={css({
        w: 'full',
        py: 32,
        mx: 'auto',
        px: 'baseX',
        maxW: 'maxWidth',
        display: 'flex',
        flexDir: 'column',
        gap: 32,
      })}
    >
      <h1
        className={css({
          fontFamily: 'gillSans',
          letterSpacing: '0.22em',
        })}
      >
        VIRTUAL
        <br />
        CREDIT
      </h1>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          rowGap: 32,
        })}
      >
        <div>
          <ul
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 8,
            })}
          >
            {mainNavConfig.navItems1.map((nav) => (
              <li
                className={css({
                  fontSize: 'smaller',
                  letterSpacing: 'widest',
                })}
                key={nav.title}
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 8,
            })}
          >
            {mainNavConfig.navItems2.map((nav) => (
              <li
                className={css({
                  fontSize: 'smaller',
                  letterSpacing: 'widest',
                })}
                key={nav.title}
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 8,
            })}
          >
            {mainNavConfig.navItems3.map((nav) => (
              <li
                className={css({
                  fontSize: 'smaller',
                  letterSpacing: 'widest',
                })}
                key={nav.title}
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>

      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 16,
          borderTop: '1px dashed token(borders.primary)',
        })}
      >
        <ul
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          })}
        >
          {documentConfig.navItems.map((nav) => (
            <li
              className={css({
                color: 'secondary',
                fontSize: 'x-small',
                letterSpacing: 'base',
              })}
              key={nav.title}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <ul
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          })}
        >
          {socialConfig.navItems.map((nav) => (
            <li
              className={css({
                color: 'secondary',
                fontSize: 'x-small',
                letterSpacing: 'base',
              })}
              key={nav.title}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
