import { Box, HStack, Text, VStack } from '@kuma-ui/core'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export const TagList = async () => {
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
        where: {
          work: {
            published: true,
          },
        },
      },
    },
  })
  const tags = allTags.filter((tag) =>
    tag.workTags.some(
      (workTag) => workTag.work.published && workTag.work.histories.length > 0,
    ),
  )
  tags.sort((a, b) => {
    const aCount = a.workTags.filter((workTag) => workTag.work.published).length
    const bCount = b.workTags.filter((workTag) => workTag.work.published).length
    return bCount - aCount
  })

  return (
    <VStack as='ul' gap={12} alignItems={'center'} className='full-bleed'>
      {tags.map((tag) => (
        <Box
          as='li'
          key={tag.id}
          color={'colors.secondary'}
          _hover={{ color: '#2D2D2E' }}
        >
          <Link href={`/searches/tags/${tag.name}`}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              width={400}
              mx={'auto'}
            >
              <Text>{`# ${tag.name}`}</Text>
              <Text>
                {
                  tag.workTags.filter((workTag) => workTag.work.published)
                    .length
                }
              </Text>
            </HStack>
          </Link>
        </Box>
      ))}
    </VStack>
  )
}
