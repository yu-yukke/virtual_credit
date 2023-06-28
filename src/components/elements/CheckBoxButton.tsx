import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';
import { ChangeEventHandler } from 'react';

import { css } from '../../../styled-system/css';

type Props = {
  id: string;
  value: number | 'all';
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

export const CheckBoxButton = ({ id, value, label, onChange }: Props) => {
  return (
    <>
      <input
        id={id}
        type='checkbox'
        value={value}
        className={classNames(
          'peer',
          css({
            display: 'none',
          }),
        )}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={classNames(
          notoSansJp500.className,
          css({
            fontSize: 'xs',
            color: 'secondary',
            py: 4,
            px: 12,
            rounded: 'xl',
            border: '1px solid transparent',
            cursor: 'pointer',
            _peerHover: {
              bg: 'white',
            },
            _peerChecked: {
              color: 'primary',
              bg: 'white',
              border: '1px solid token(borders.primary)',
            },
          }),
        )}
      >
        {label}
      </label>
    </>
  );
};
