import { HStack } from '@kuma-ui/core';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Category } from '@/db/schema';

type CategoriesProps = {
  categories: Category[];
};

export const Categories = async ({ categories }: CategoriesProps) => {
  return (
    <HStack as='ul' alignItems={'center'} gap={8}>
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
    </HStack>
  );
};
