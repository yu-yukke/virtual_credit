'use client';

import { useEffect, useState } from 'react';
import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Category } from '@/db/schema';

type Props = {
  categories: Category[];
};

export const CategoryList = ({ categories }: Props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.checked
      ? setCheckedItems([...checkedItems, e.target.value])
      : setCheckedItems(
          checkedItems.filter((item) => item.match(e.target.value) === null),
        );

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      })}
    >
      <li>
        <CheckBoxButton
          id='all'
          value={'all'}
          label='すべて'
          onChange={handleChange}
        />
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <CheckBoxButton
            id={`id_${category.id}`}
            value={category.id}
            label={category.name}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
};
