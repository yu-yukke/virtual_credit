'use client';

import { Box, Grid, HStack, Heading, Text, css } from '@kuma-ui/core';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { useCallback, useEffect, useState } from 'react';
import { AnonymousUserIcon } from '../icons';
import { AnonymousUser } from '@/types/anonymous-users';
import { User } from '@/types/users';
import { Work } from '@/types/works';

type Props = {
  work: Work;
};

const getCreators = (work: Work): (User | AnonymousUser)[] => {
  const creators: (User | AnonymousUser)[] = [];

  work.copyrights.forEach((copyright) => {
    copyright.userCopyrights.forEach((userCopyright) => {
      if (!creators.includes(userCopyright.user)) {
        creators.push(userCopyright.user);
      }
    });

    copyright.anonymousUserCopyrights.forEach((anonymousUserCopyright) => {
      if (!creators.includes(anonymousUserCopyright.anonymousUser)) {
        creators.push(anonymousUserCopyright.anonymousUser);
      }
    });
  });

  return creators;
};

const RenderAnonymousUserIcon = () => {
  return (
    <AnonymousUserIcon
      className={css`
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid t('colors.borderPrimary');
        fill: t('colors.tertiary');
      `}
    />
  );
};

export const WorkCard = ({ work }: Props) => {
  const creators = getCreators(work);
  const [randomCreator, setRandomCreator] = useState(creators[0]);
  // @ts-expect-error anonymousUserの場合はimageがないがエラーになるため
  const randomCreatorImage = randomCreator.image;

  const [loading, setLoading] = useState(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(e.type == 'mouseenter');
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }

    setRandomCreator(creators[Math.floor(Math.random() * creators.length)]);
    setLoading(false);
  }, [loading, creators]);

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
      <Box
        className={css`
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 0.875rem;
          overflow: hidden;
        `}
      >
        <Image
          src={work.workImages[0].url}
          alt=''
          fill
          sizes='100%'
          className={clsx(
            css`
              width: 100%;
              height: auto;
              border-radius: 0.875rem;
              transition: all 0.4s;
            `,
            isHover &&
              css`
                transform: scale(1.04);
              `,
          )}
        />
      </Box>
      <Heading
        as='h2'
        fontSize={'1.125rem'}
        letterSpacing={'0.03375rem'}
        lineHeight={1.4}
      >
        {work.histories[0].title}
      </Heading>
      <HStack alignItems={'center'}>
        <HStack alignItems={'center'}>
          {creators.length ? (
            <HStack gap={8} alignItems={'center'}>
              {randomCreatorImage ? (
                <Image
                  src={randomCreatorImage}
                  alt=''
                  width={20}
                  height={20}
                  sizes='100vw'
                  className={css`
                    width: 100%;
                    height: auto;
                    max-width: 20px;
                    border-radius: 100%;
                    border: 1px solid t('colors.borderPrimary');
                  `}
                />
              ) : (
                <RenderAnonymousUserIcon />
              )}
              <Heading
                as='h3'
                fontSize={'0.8125rem'}
                letterSpacing={'0.02438rem'}
                color={'colors.secondary'}
              >
                {creators.length > 1
                  ? `${creators.length} creators`
                  : creators[0].name}
              </Heading>
            </HStack>
          ) : (
            <HStack gap={8} alignItems={'center'}>
              <RenderAnonymousUserIcon />
              <Heading
                as='h3'
                fontSize={'0.8125rem'}
                letterSpacing={'0.02438rem'}
                color={'colors.secondary'}
              >
                No credits
              </Heading>
            </HStack>
          )}
        </HStack>
        <Text
          as='span'
          fontSize={'0.8125rem'}
          color={'colors.secondary'}
          ml={16}
          pl={16}
          borderLeftStyle={'solid'}
          borderWidth={1}
          borderColor={'colors.borderPrimary'}
        >
          {dayjs(work.createdAt).format('DD.MM, YYYY')}
        </Text>
      </HStack>
    </Grid>
  );
};
