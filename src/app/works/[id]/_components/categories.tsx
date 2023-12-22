import { Box, Grid, Text, css } from '@kuma-ui/core'
import { Work } from '@prisma/client'
import Link from 'next/link'
import prisma from '@/lib/prisma'

type Props = {
  work: Work
}

export const Categories = async ({ work }: Props) => {
  const workCategories = await prisma.workCategory.findMany({
    where: {
      workId: work.id,
    },
    include: {
      category: true,
    },
  })
  const categories = [
    ...new Set(workCategories.map((workCategory) => workCategory.category)),
  ]

  if (!categories.length) {
    return null
  }

  return (
    <Grid gridTemplateColumns={'repeat(4, 1fr)'} columnGap={16}>
      <Box gridColumn={'1 / 3'}>
        <Text
          as='label'
          fontSize={'0.875rem'}
          color={'colors.tertiary'}
          wordBreak={'break-all'}
          lineHeight={1.625}
        >
          カテゴリー
        </Text>
      </Box>

      <Grid
        gridColumn={'3 / 5'}
        className={css`
          row-gap: 8px;
        `}
      >
        {categories.map((category) => (
          <Link
            href={`/searches/categories/${category.name}`}
            key={category.id}
            className={css`
              grid-column-start: 1;
              width: fit-content;
              text-decoration: underline;
            `}
          >
            <Text as='span' fontSize={'0.875rem'}>
              {category.name}
            </Text>
          </Link>
        ))}
      </Grid>
    </Grid>
  )
}
