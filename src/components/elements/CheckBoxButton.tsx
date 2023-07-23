import { Input, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';
import { ChangeEventHandler } from 'react';

type CheckBoxProps = {
  id: string;
  value: number | 'all';
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

export const CheckBoxButton = ({
  id,
  value,
  label,
  onChange,
}: CheckBoxProps) => {
  return (
    <>
      <Input
        display={'none'}
        id={id}
        type='checkbox'
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={clsx(
          notoSansJp500.className,
          css`
            font-size: 0.75rem;
            color: #777272;
            padding: 4px 12px;
            border-radius: 0.75rem;
            border: 1px solid transparent;
            cursor: pointer;
          `,
        )}
      >
        {label}
      </label>
    </>
  );
};
