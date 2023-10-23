import { HStack } from '@kuma-ui/core';

import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

export const Categories = async () => {
  const categories = await prisma.category.findMany();

  return (
    <HStack as='ul' gap={4} py={12} overflow={'scroll hidden'}>
      {categories.map((category) => (
        <li key={category.id}>
          <FilterButton text={category.name} />
        </li>
      ))}
    </HStack>
  );
};
