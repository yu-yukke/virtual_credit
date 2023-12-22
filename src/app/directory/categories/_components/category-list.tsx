import { Box, HStack, Text, VStack } from '@kuma-ui/core'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export const CategoryList = async () => {
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
        where: {
          work: {
            published: true,
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
  categories.sort((a, b) => {
    const aCount = a.workCategories.filter(
      (workCategory) => workCategory.work.published,
    ).length
    const bCount = b.workCategories.filter(
      (workCategory) => workCategory.work.published,
    ).length
    return bCount - aCount
  })

  return (
    <VStack as='ul' gap={12} alignItems={'center'} className='full-bleed'>
      {categories.map((category) => (
        <Box
          as='li'
          key={category.id}
          color={'colors.secondary'}
          _hover={{ color: '#2D2D2E' }}
        >
          <Link href={`/searches/categories/${category.name}`}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              width={400}
              mx={'auto'}
            >
              <Text>{category.name}</Text>
              <Text>
                {
                  category.workCategories.filter(
                    (workCategory) => workCategory.work.published,
                  ).length
                }
              </Text>
            </HStack>
          </Link>
        </Box>
      ))}
    </VStack>
  )
}
