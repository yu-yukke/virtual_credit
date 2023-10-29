import { Grid, css } from '@kuma-ui/core';

import { WorkCard } from '@/components/elements/cards';
import prisma from '@/lib/prisma';

type Props = {
  categoryName?: string;
};

export const WorkList = async ({ categoryName }: Props) => {
  const decodeCategoryName = categoryName ? decodeURI(categoryName) : '';
  const works = await prisma.work.findMany({
    where: {
      workCategories: {
        some: {
          category: {
            name: decodeURI(decodeCategoryName),
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
  });
  const publishedWorks = await works.filter(
    (work) => !!work.histories.length && work.histories[0].published,
  );

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
      {!!publishedWorks.length &&
        publishedWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            mainImage={work.workImages[0]}
            copyrights={work.copyrights}
          />
        ))}
    </Grid>
  );
};
