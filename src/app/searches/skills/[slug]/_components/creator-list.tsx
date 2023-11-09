import { Grid, css } from '@kuma-ui/core';

import { CreatorCard } from '@/components/elements/cards';
import prisma from '@/lib/prisma';

type Props = {
  skillName?: string;
};

export const CreatorList = async ({ skillName }: Props) => {
  const decodeSkillName = skillName ? decodeURI(skillName) : '';
  const creators = await prisma.user.findMany({
    where: {
      published: true,
      userSkills: {
        some: {
          skill: {
            name: decodeSkillName,
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
  });

  return (
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
  );
};
