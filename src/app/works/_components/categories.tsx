import { HStack } from '@kuma-ui/core'

import Link from 'next/link'
import { FilterButton } from '@/components/elements/buttons'

import prisma from '@/lib/prisma'

type Props = {
  categoryName?: string
}

export const Categories = async ({ categoryName }: Props) => {
  const allCategories = await prisma.category.findMany({
    include: {
      workCategories: {
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
  })
  const categories = allCategories.filter((category) =>
    category.workCategories.some(
      (workCategory) =>
        workCategory.work.published && workCategory.work.histories.length > 0,
    ),
  )

  return (
    <HStack
      as='ul'
      gap={4}
      py={12}
      px={1}
      overflow={'scroll hidden'}
      maskImage={'linear-gradient(to left, rgba(0, 0, 0, 0.4), white)'}
    >
      {!!categories.length && (
        <>
          <li>
            <Link href={'/works'}>
              <FilterButton text='All' />
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/searches/categories/${category.name}`}>
                <FilterButton
                  text={`${category.name} (${
                    category.workCategories.filter(
                      (workCategory) => workCategory.work.published,
                    ).length
                  })`}
                  isActive={encodeURI(category.name) === categoryName}
                />
              </Link>
            </li>
          ))}
        </>
      )}
    </HStack>
  )
}
