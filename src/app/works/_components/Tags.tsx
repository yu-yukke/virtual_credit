import { HStack } from '@kuma-ui/core';

import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

export const Tags = async () => {
  const tags = await prisma.tag.findMany();

  return (
    <HStack as='ul' gap={4} py={12} overflow={'scroll hidden'}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <FilterButton text={`# ${tag.name}`} />
        </li>
      ))}
    </HStack>
  );
};
