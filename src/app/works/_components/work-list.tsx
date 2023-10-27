import { Grid, css } from '@kuma-ui/core';

import { WorkCard } from '@/components/elements/cards';
import prisma from '@/lib/prisma';

export const WorkList = async () => {
  const works = await prisma.work.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workImages: {
        orderBy: {
          createdAt: 'desc',
        },
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
    (work) => work.histories.length > 0 && work.histories[0].published,
  );

  return (
    <Grid
      as='section'
      py={32}
      gridTemplateColumns={'repeat(auto-fit, minmax(380px, 1fr))'}
      className={css`
        grid-column-gap: 16px;
        grid-row-gap: 24px;
      `}
    >
      {publishedWorks.length &&
        publishedWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            workImages={work.workImages}
            copyrights={work.copyrights}
          />
        ))}
    </Grid>
  );
};
