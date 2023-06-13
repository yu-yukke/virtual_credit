'use client';

import { useState } from 'react';

export const GlobalSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  return (
    <div className='flex-1 p-2.5 border border-gray-200 rounded-md'>
      <input
        type='search'
        placeholder='Search here'
        onChange={handleChange}
        value={searchInput}
        className='w-full h-full bg-transparent'
      />
    </div>
  );
};
