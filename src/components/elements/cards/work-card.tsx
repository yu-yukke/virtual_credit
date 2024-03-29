'use client'

import { Box, Grid, css } from '@kuma-ui/core'
import {
  AnonymousUser,
  AnonymousUserCopyright,
  Copyright,
  User,
  UserCopyright,
  Work,
  WorkHistory,
  WorkImage,
} from '@prisma/client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'

import { Merge } from '@/types/merge'
import { WorkCardSummary } from './work-card-summary'

type Props = {
  work: Merge<Work, { histories: WorkHistory[] }>
  mainImage?: WorkImage
  copyrights: Merge<
    Copyright,
    {
      userCopyrights: Merge<UserCopyright, { user: User }>[]
      anonymousUserCopyrights: Merge<
        AnonymousUserCopyright,
        { anonymousUser: AnonymousUser }
      >[]
    }
  >[]
}

export const WorkCard = ({ work, mainImage, copyrights }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(e.type === 'mouseenter')
  }, [])

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
            fill={true}
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
  )
}
