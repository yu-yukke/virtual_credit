import { HStack } from '@kuma-ui/core';

import Link from 'next/link';
import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

type Props = {
  categoryName?: string;
};

export const Categories = async ({ categoryName }: Props) => {
  const categories = await prisma.category.findMany();

  if (!categories.length) {
    return null;
  }

  return (
    <HStack as='ul' gap={4} py={12} px={1} overflow={'scroll hidden'}>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/searches/categories/${category.name}`}>
            <FilterButton
              text={category.name}
              isActive={encodeURI(category.name) === categoryName}
            />
          </Link>
        </li>
      ))}
    </HStack>
  );
};
