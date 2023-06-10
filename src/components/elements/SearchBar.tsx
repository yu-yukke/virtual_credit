'use client';

import { useState } from 'react';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  return (
    <input
      type='search'
      placeholder='Search here'
      onChange={handleChange}
      value={searchInput}
    />
  );
};
