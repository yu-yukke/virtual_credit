'use client';

import { Grid, css } from '@kuma-ui/core';
import {
  Copyright,
  Skill,
  User,
  UserCopyright,
  UserSkill,
  Work,
  WorkImage,
} from '@prisma/client';
import clsx from 'clsx';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { CreatorCardImages } from './creator-card-images';
import { CreatorCardSummary } from './creator-card-summary';
import { Merge } from '@/types/merge';

type Props = {
  creator: User;
  userSkills: Merge<UserSkill, { skill: Skill }>[];
  userCopyrights: Merge<
    UserCopyright,
    {
      copyright: Merge<
        Copyright,
        { work: Merge<Work, { workImages: WorkImage[] }> }
      >;
    }
  >[];
};

export const CreatorCard = ({ creator, userSkills, userCopyrights }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(e.type == 'mouseenter');
  }, []);
  const workImages = Array.from(
    new Set(
      userCopyrights.flatMap(
        (userCopyright) => userCopyright.copyright.work.workImages,
      ),
    ),
  );

  return (
    <Grid
      gridTemplateColumns={'max-content'}
      gridTemplateRows={'subgrid'}
      gridColumnStart={'auto'}
      gridRow={'span 3'}
      p={24}
      borderRadius={'1rem'}
      position={'relative'}
      transition={'all 0.4s'}
      overflow={'hidden'}
      className={clsx(
        css`
          row-gap: 24px;
        `,
        isHover
          ? css`
              box-shadow:
                0px 2px 4px 0px rgba(23, 13, 13, 0.08),
                0px 1px 2px -1px rgba(23, 13, 13, 0.16),
                0px 0px 0px 1px rgba(23, 13, 13, 0.16);
            `
          : css`
              box-shadow:
                0px 2px 4px 0px rgba(23, 13, 13, 0.04),
                0px 1px 2px -1px rgba(23, 13, 13, 0.08),
                0px 0px 0px 1px rgba(23, 13, 13, 0.08);
            `,
      )}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Link
        href='/'
        className={css`
          position: absolute;
          inset: 0;
          grid-column-start: auto;
          z-index: 10;
        `}
      />
      <CreatorCardImages
        creator={creator}
        workImages={workImages}
        isHover={isHover}
      />
      <CreatorCardSummary creator={creator} userSkills={userSkills} />
    </Grid>
  );
};
