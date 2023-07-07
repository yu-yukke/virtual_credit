import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Category } from '@/db/schema';

type Categories = Category[];

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const CategoryList = async () => {
  const categories: Categories = await getCategories();

  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      })}
    >
      <li>
        <CheckBoxButton id='category_all' value={-1} label='すべて' />
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <CheckBoxButton
            id={`category_${category.id}`}
            value={category.id}
            label={category.name}
          />
        </li>
      ))}
    </ul>
  );
};
