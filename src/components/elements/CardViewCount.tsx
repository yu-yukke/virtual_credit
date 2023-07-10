import classNames from 'classnames';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { SVGProps } from 'react';
import { css } from '../../../styled-system/css';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

type ViewCountProps = {
  viewCount: number;
};

export function MdiEye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z'
      ></path>
    </svg>
  );
}

// card用。重ねる画像に対してabsoluteで位置を取る
export const CardViewCount = ({ viewCount }: ViewCountProps) => {
  return (
    <div
      className={css({
        position: 'absolute',
        bottom: 12,
        right: 12,
        px: 12,
        py: 6,
        rounded: 'lg',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        bg: 'rgba(32, 32, 30, 0.6)',
        transition: 'all 0.3s',
        opacity: 0,
        _groupHover: {
          opacity: 1,
        },
      })}
    >
      <MdiEye
        className={css({
          color: 'quaternary',
          fontSize: 'lg',
        })}
      />
      <span
        className={classNames(
          jakartaSans.className,
          css({
            color: 'quaternary',
            fontSize: 'sm',
          }),
        )}
      >
        {viewCount}
      </span>
    </div>
  );
};
