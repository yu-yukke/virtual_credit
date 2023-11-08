import { HStack } from '@kuma-ui/core';

import Link from 'next/link';
import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

type Props = {
  tagName?: string;
};

export const Tags = async ({ tagName }: Props) => {
  const allTags = await prisma.tag.findMany({
    include: {
      workTags: {
        include: {
          work: {
            include: {
              histories: {
                orderBy: {
                  createdAt: 'desc',
                },
              },
            },
          },
        },
      },
    },
  });
  const tags = allTags.filter((tag) =>
    tag.workTags.some(
      (workTag) =>
        workTag.work.histories.length > 0 &&
        workTag.work.histories[0].published,
    ),
  );

  return (
    <HStack
      as='ul'
      gap={4}
      py={12}
      px={1}
      overflow={'scroll hidden'}
      maskImage={'linear-gradient(to left, rgba(0, 0, 0, 0.4), white)'}
    >
      {!!tags.length ? (
        <>
          <li>
            <Link href={'/works'}>
              <FilterButton text='All' />
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/searches/tags/${tag.name}`}>
                <FilterButton
                  text={`# ${tag.name} (${
                    tag.workTags.filter(
                      (workTag) => workTag.work.histories[0].published,
                    ).length
                  })`}
                  isActive={encodeURI(tag.name) === tagName}
                />
              </Link>
            </li>
          ))}
        </>
      ) : (
        Array.from({ length: 12 }).map((_, i) => (
          <FilterButton key={i} isLoading />
        ))
      )}
    </HStack>
  );
};
