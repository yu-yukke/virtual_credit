import { HStack } from '@kuma-ui/core';

import Link from 'next/link';
import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

type Props = {
  tagName?: string;
};

export const Tags = async ({ tagName }: Props) => {
  const tags = await prisma.tag.findMany();

  if (!tags.length) {
    return null;
  }

  return (
    <HStack as='ul' gap={4} py={12} px={1} overflow={'scroll hidden'}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link href={`/searches/tags/${tag.name}`}>
            <FilterButton
              text={`# ${tag.name}`}
              isActive={encodeURI(tag.name) === tagName}
            />
          </Link>
        </li>
      ))}
    </HStack>
  );
};
