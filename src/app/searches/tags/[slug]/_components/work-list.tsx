import { Grid, HStack, css } from '@kuma-ui/core'

import { Pagination } from '@/components/common'
import { WorkCard } from '@/components/elements/cards'
import prisma from '@/lib/prisma'

type Props = {
  tagName?: string
  page: number
  worksCount: number
}

const getWorks = async ({
  perPage,
  skip,
  tagName,
}: {
  perPage: number
  skip: number
  tagName: string
}) => {
  return await prisma.work.findMany({
    skip,
    take: perPage,
    where: {
      published: true,
      workTags: {
        some: {
          tag: {
            name: tagName,
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workCategories: {
        include: {
          category: true,
        },
      },
      workImages: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
      copyrights: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          userCopyrights: {
            include: {
              user: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
          anonymousUserCopyrights: {
            include: {
              anonymousUser: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
    },
  })
}

export const WorkList = async ({ tagName, page, worksCount }: Props) => {
  const perPage = 24
  const skip = perPage * (page - 1)
  const decodedTagName = tagName ? decodeURI(tagName) : ''
  const works = await getWorks({
    perPage,
    skip,
    tagName: decodedTagName,
  })
  const pageCount = Math.ceil(worksCount / perPage)

  return (
    <>
      <Grid
        as='section'
        py={32}
        gridTemplateColumns={'repeat(auto-fill, minmax(380px, 1fr))'}
        className={css`
          grid-column-gap: 16px;
          grid-row-gap: 24px;
        `}
      >
        {works.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            mainImage={work.workImages[0]}
            copyrights={work.copyrights}
          />
        ))}
      </Grid>
      <HStack as='section' justifyContent={'center'} mt={48}>
        <Pagination page={page} pageCount={pageCount} />
      </HStack>
    </>
  )
}
