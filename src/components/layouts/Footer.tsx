import classNames from 'classnames';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { SVGProps } from 'react';

import {
  ExploreNavConfig,
  AboutNavConfig,
  ContactNavConfig,
} from '@/config/navigation';

const inter400 = Inter({ weight: '400', subsets: ['latin'] });
const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export function LogosTwitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.23em'
      height='1em'
      viewBox='0 0 256 209'
      {...props}
    >
      <path
        fill='#55acee'
        d='M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45'
      ></path>
    </svg>
  );
}

export function LogosDiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.29em'
      height='1em'
      viewBox='0 0 256 199'
      {...props}
    >
      <path
        fill='#5865F2'
        d='M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18Z'
      ></path>
    </svg>
  );
}

export const Footer = () => {
  return (
    <>footer</>
    // <footer
    //   className={css({
    //     w: 'full',
    //     zIndex: 10,
    //     display: 'grid',
    //     gridTemplateColumns:
    //       '1fr min(calc(token(sizes.maxWidth) - token(spacing.baseX) * 2), calc(token(sizes.full) - 60px)) 1fr',
    //     '& *': {
    //       gridColumnStart: '2',
    //     },
    //   })}
    // >
    //   <div
    //     className={css({
    //       w: 'full',
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       borderTop: '1px solid token(borders.primary)',
    //       pt: 68,
    //       pb: 160,
    //     })}
    //   >
    //     {/* logo part */}
    //     <div>
    //       <Link href='/'>
    //         <h1
    //           className={css({
    //             fontFamily: 'futura',
    //             fontSize: 'xl',
    //             letterSpacing: '-0.05em',
    //           })}
    //         >
    //           VIRTUAL CREDIT
    //         </h1>
    //       </Link>
    //       <h2
    //         className={classNames(
    //           inter400.className,
    //           css({
    //             fontSize: 'xs',
    //             color: 'quaternary',
    //             mt: 2,
    //           }),
    //         )}
    //       >
    //         © Empire of Takaomi
    //       </h2>
    //       <div
    //         className={css({
    //           display: 'flex',
    //           alignItems: 'center',
    //           gap: 12,
    //           mt: 16,
    //         })}
    //       >
    //         <LogosTwitter />
    //         <LogosDiscordIcon />
    //       </div>
    //     </div>
    //     {/* logo part end */}

    //     {/* nav part */}
    //     <div
    //       className={css({
    //         display: 'flex',
    //         gap: 116,
    //       })}
    //     >
    //       {/* explore */}
    //       <div
    //         className={css({
    //           display: 'flex',
    //           flexDir: 'column',
    //           gap: 8,
    //         })}
    //       >
    //         <h3
    //           className={classNames(
    //             inter500.className,
    //             css({
    //               fontSize: 'sm',
    //               color: 'tertiary',
    //             }),
    //           )}
    //         >
    //           Explore
    //         </h3>
    //         <ul
    //           className={css({
    //             display: 'flex',
    //             flexDir: 'column',
    //             gap: 8,
    //           })}
    //         >
    //           {ExploreNavConfig.navItems.map((nav) => (
    //             <li key={nav.title}>
    //               <Link
    //                 href={nav.href}
    //                 className={css({
    //                   color: 'secondary',
    //                   fontSize: 'sm',
    //                 })}
    //               >
    //                 {nav.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* about */}
    //       <div
    //         className={css({
    //           display: 'flex',
    //           flexDir: 'column',
    //           gap: 8,
    //         })}
    //       >
    //         <h3
    //           className={classNames(
    //             inter500.className,
    //             css({
    //               fontSize: 'sm',
    //               color: 'tertiary',
    //             }),
    //           )}
    //         >
    //           About Us
    //         </h3>
    //         <ul
    //           className={css({
    //             display: 'flex',
    //             flexDir: 'column',
    //             gap: 8,
    //           })}
    //         >
    //           {AboutNavConfig.navItems.map((nav) => (
    //             <li key={nav.title}>
    //               <Link
    //                 href={nav.href}
    //                 className={css({
    //                   color: 'secondary',
    //                   fontSize: 'sm',
    //                 })}
    //               >
    //                 {nav.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* contact */}
    //       <div
    //         className={css({
    //           display: 'flex',
    //           flexDir: 'column',
    //           gap: 8,
    //         })}
    //       >
    //         <h3
    //           className={classNames(
    //             inter500.className,
    //             css({
    //               fontSize: 'sm',
    //               color: 'tertiary',
    //             }),
    //           )}
    //         >
    //           Contact Us
    //         </h3>
    //         <ul
    //           className={css({
    //             display: 'flex',
    //             flexDir: 'column',
    //             gap: 8,
    //           })}
    //         >
    //           {ContactNavConfig.navItems.map((nav) => (
    //             <li key={nav.title}>
    //               <Link
    //                 href={nav.href}
    //                 className={css({
    //                   color: 'secondary',
    //                   fontSize: 'sm',
    //                 })}
    //               >
    //                 {nav.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //     {/* nav part end */}
    //   </div>
    // </footer>
  );
};
