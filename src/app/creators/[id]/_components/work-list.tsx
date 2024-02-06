import prisma from '@/lib/prisma'
import { Grid, css } from '@kuma-ui/core'
import { User } from '@prisma/client'

import { WorkCard } from '@/components/elements/cards'

type Props = {
  creator: User
}

export const WorkList = async ({ creator }: Props) => {
  const works = await prisma.work.findMany({
    where: {
      published: true,
      copyrights: {
        some: {
          userCopyrights: {
            some: {
              user: {
                id: creator.id,
              },
            },
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
  // const categories = works.flatMap((work) =>
  //   work.workCategories.map((workCategory) => workCategory.category),
  // )
  // const uniqueCategories = Array.from(
  //   new Set(categories.map((category) => category.id)),
  // ).map((id) => categories.find((category) => category.id === id))

  return (
    <>
      {/* {!!uniqueCategories.length && (
        <HStack
          as='ul'
          gap={4}
          pt={32}
          pb={12}
          px={1}
          overflow={'scroll hidden'}
        >
          {uniqueCategories.map((category) => {
            if (category) {
              return (
                <li key={category.id}>
                  <FilterButton text={category.name} />
                </li>
              )
            }

            return null
          })}
        </HStack>
      )} */}
      <Grid
        as='section'
        py={32}
        gridTemplateColumns={'repeat(auto-fill, minmax(380px, 1fr))'}
        className={css`
          grid-column-gap: 16px;
          grid-row-gap: 24px;
        `}
      >
        {works.length ? (
          works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              mainImage={work.workImages[0]}
              copyrights={work.copyrights}
            />
          ))
        ) : (
          <>hoge</>
        )}
      </Grid>
    </>
  )
}
