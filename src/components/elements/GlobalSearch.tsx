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
        flexGrow: 1,
        flexBasis: 1,
        flexShrink: 0,
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
          w: '100%',
          h: '100%',
          bg: 'transparent',
        })}
      />
    </div>
  );
};
