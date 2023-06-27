import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';

import { css } from '../../../../styled-system/css';

import { Tag } from '@/db/schema';

type Props = {
  tags: Tag[];
};

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

export const TagList = ({ tags }: Props) => {
  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      })}
    >
      <li>
        <button
          className={classNames(
            notoSansJp500.className,
            css({
              fontSize: 'xs',
              color: 'primary',
              py: 4,
              px: 12,
              rounded: 'full',
              bg: 'bgActive',
              border: '1px solid token(borders.primary)',
            }),
          )}
        >
          すべて
        </button>
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <button
            className={css({
              fontSize: 'xs',
              color: 'secondary',
              py: 4,
              px: 12,
              rounded: 'xl',
            })}
          >
            {tag.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
