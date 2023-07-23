import { HStack, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

type ViewCountProps = {
  viewCount: number;
};

export function MdiEye() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      style={{ fontSize: '1.125rem' }}
    >
      <path
        fill='#aeaeae'
        d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z'
      ></path>
    </svg>
  );
}

// card用。重ねる画像に対してabsoluteで位置を取る
export const CardViewCount = ({ viewCount }: ViewCountProps) => {
  return (
    <HStack
      alignItems={'center'}
      gap={8}
      position={'absolute'}
      bottom={12}
      right={12}
      px={12}
      py={6}
      borderRadius={'0.5rem'}
      bg={'rgba(32, 32, 30, 0.6)'}
      transition={'all 0.3s'}
      opacity={1}
    >
      <MdiEye />
      <span
        className={clsx(
          jakartaSans.className,
          css`
            color: #aeaeae;
            font-size: 0.875rem;
          `,
        )}
      >
        {viewCount}
      </span>
    </HStack>
  );
};
