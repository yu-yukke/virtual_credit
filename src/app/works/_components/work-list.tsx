import { Grid, css } from '@kuma-ui/core';

import {
  AnonymousUser,
  AnonymousUserCopyright,
  Copyright,
  User,
  UserCopyright,
  Work,
  WorkHistory,
  WorkImage,
} from '@prisma/client';

import { WorkCard } from '@/components/elements/cards';
import { Merge } from '@/types/merge';

type Props = {
  works: Merge<
    Work,
    {
      histories: WorkHistory[];
      workImages: WorkImage[];
      copyrights: Merge<
        Copyright,
        {
          userCopyrights: Merge<
            UserCopyright,
            {
              user: User;
            }
          >[];
          anonymousUserCopyrights: Merge<
            AnonymousUserCopyright,
            {
              anonymousUser: AnonymousUser;
            }
          >[];
        }
      >[];
    }
  >[];
};

export const WorkList = async ({ works }: Props) => {
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
      {works.length &&
        works.map((work) => <WorkCard key={work.id} work={work} />)}
    </Grid>
  );
};
