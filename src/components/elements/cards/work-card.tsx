'use client';

import { Box, Grid, HStack, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';
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
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { WorkCardSummary } from './work-card-summary';
import { Merge } from '@/types/merge';

type Props =
  | {
      isLoading: true;
      work?: never;
      mainImage?: never;
      copyrights?: never;
    }
  | {
      isLoading?: false;
      work: Merge<Work, { histories: WorkHistory[] }>;
      mainImage?: WorkImage;
      copyrights: Merge<
        Copyright,
        {
          userCopyrights: Merge<UserCopyright, { user: User }>[];
          anonymousUserCopyrights: Merge<
            AnonymousUserCopyright,
            { anonymousUser: AnonymousUser }
          >[];
        }
      >[];
    };

export const WorkCard = ({ isLoading, work, mainImage, copyrights }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(e.type == 'mouseenter');
  }, []);

  if (isLoading) {
    return (
      <Grid
        gridTemplateColumns={'max-content'}
        gridTemplateRows={'subgrid'}
        gridColumnStart={'auto'}
        gridRow={'span 3'}
        p={24}
        borderRadius={'1rem'}
        overflow={'hidden'}
        className={css`
          row-gap: 24px;
          box-shadow:
            0px 2px 4px 0px rgba(23, 13, 13, 0.04),
            0px 1px 2px -1px rgba(23, 13, 13, 0.08),
            0px 0px 0px 1px rgba(23, 13, 13, 0.08);
        `}
      >
        <Skeleton
          variant='rounded'
          width={'100%'}
          height={'auto'}
          className={css`
            aspect-ratio: 16 / 9;
          `}
        />
        <Skeleton variant='rounded' width={'80%'} height={24} />
        <HStack alignItems={'center'} gap={32}>
          <HStack alignItems={'center'} gap={8}>
            <Skeleton variant='circular' width={20} height={20} />
            <Skeleton variant='rounded' width={72} height={16} />
          </HStack>
          <Skeleton variant='rounded' width={80} height={16} />
        </HStack>
      </Grid>
    );
  }

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
        href={`/works/${work.id}`}
        className={css`
          position: absolute;
          inset: 0;
          grid-column-start: auto;
          z-index: 10;
        `}
      />
      <Box
        position={'relative'}
        width={'100%'}
        height={'auto'}
        borderRadius={'0.875rem'}
        overflow={'hidden'}
        className={css`
          aspect-ratio: 16 / 9;
        `}
      >
        {mainImage ? (
          <Image
            src={mainImage.url}
            alt={`${work.histories[0].title}のメイン画像`}
            fill
            sizes='100%'
            className={clsx(
              css`
                transition: all 0.4s;
                object-fit: cover;
              `,
              isHover &&
                css`
                  transform: scale(1.04);
                `,
            )}
          />
        ) : (
          <Box
            width={'100%'}
            height={'auto'}
            position={'absolute'}
            inset={0}
            bg={'whitesmoke'}
          />
        )}
      </Box>
      <WorkCardSummary work={work} copyrights={copyrights} />
    </Grid>
  );
};
