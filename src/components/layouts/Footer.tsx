import Link from 'next/link';

import { documentConfig } from '@/config/document';
import { mainNavConfig } from '@/config/mainNav';
import { socialConfig } from '@/config/social';

export const Footer = () => {
  return (
    <footer className='w-full py-8 mx-auto px-[100px] max-w-[1440px] flex flex-col gap-8'>
      <h1 className='text-base font-normal tracking-[.22em] leading-tight font-GillSans'>
        VIRTUAL
        <br />
        CREDIT
      </h1>

      <div className='grid grid-cols-footer gap-y-8'>
        <div>
          <ul className='flex flex-col gap-3'>
            {mainNavConfig.navItems1.map((nav) => (
              <li className='text-xs tracking-widest' key={nav.title}>
                <Link href={nav.href} className='hover:opacity-80'>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            {mainNavConfig.navItems2.map((nav) => (
              <li className='text-xs tracking-widest' key={nav.title}>
                <Link href={nav.href} className='hover:opacity-80'>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            {mainNavConfig.navItems3.map((nav) => (
              <li className='text-xs tracking-widest' key={nav.title}>
                <Link href={nav.href} className='hover:opacity-80'>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className='flex items-center justify-between py-4 border-t border-gray-200 border-dashed'>
        <ul className='flex items-center gap-4'>
          {documentConfig.navItems.map((nav) => (
            <li
              className='text-xs tracking-wider text-gray-400'
              key={nav.title}
            >
              <Link href={nav.href} className='hover:opacity-80'>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex items-center gap-4'>
          {socialConfig.navItems.map((nav) => (
            <li
              className='text-xs tracking-wider text-gray-400'
              key={nav.title}
            >
              <Link href={nav.href} className='hover:opacity-80'>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
