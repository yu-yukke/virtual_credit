'use client';

import { useState } from 'react';

import { css } from '../../../styled-system/css';

export const GlobalSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  return (
    <div
      className={css({
        flex: '1 1 0',
        p: 10,
        border: '1px solid token(borders.primary)',
        rounded: 'md',
      })}
    >
      <input
        type='search'
        placeholder='Search here'
        onChange={handleChange}
        value={searchInput}
        className={css({
          w: 'full',
          h: 'full',
          bg: 'transparent',
        })}
      />
    </div>
  );
};
