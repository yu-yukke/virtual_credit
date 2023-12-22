import { Grid, HStack, css } from '@kuma-ui/core'

import { Pagination } from '@/components/common'
import { CreatorCard } from '@/components/elements/cards'
import prisma from '@/lib/prisma'

type Props = {
  skillName?: string
  page: number
  creatorsCount: number
}

const getCreators = async ({
  perPage,
  skip,
  skillName,
}: {
  perPage: number
  skip: number
  skillName: string
}) => {
  return await prisma.user.findMany({
    skip,
    take: perPage,
    where: {
      published: true,
      userSkills: {
        some: {
          skill: {
            name: skillName,
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      userSkills: {
        include: {
          skill: true,
        },
      },
      userCopyrights: {
        include: {
          copyright: {
            include: {
              work: {
                include: {
                  workImages: {
                    orderBy: {
                      createdAt: 'desc',
                    },
                  },
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
      },
    },
  })
}

export const CreatorList = async ({
  skillName,
  page,
  creatorsCount,
}: Props) => {
  const perPage = 24
  const skip = perPage * (page - 1)
  const decodedSkillName = skillName ? decodeURI(skillName) : ''
  const creators = await getCreators({
    perPage,
    skip,
    skillName: decodedSkillName,
  })
  const pageCount = Math.ceil(creatorsCount / perPage)

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
        {!!creators.length &&
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              userSkills={creator.userSkills}
              userCopyrights={creator.userCopyrights}
            />
          ))}
      </Grid>
      <HStack as='section' justifyContent={'center'} mt={48}>
        <Pagination page={page} pageCount={pageCount} />
      </HStack>
    </>
  )
}
