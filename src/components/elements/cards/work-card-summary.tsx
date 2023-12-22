'use client'

import { HStack, Heading, Text, css } from '@kuma-ui/core'
import {
  AnonymousUser,
  AnonymousUserCopyright,
  Copyright,
  User,
  UserCopyright,
  Work,
  WorkHistory,
} from '@prisma/client'
import dayjs from 'dayjs'
import Image from 'next/image'

import { Merge } from '@/types/merge'
import { useEffect, useState } from 'react'
import { AnonymousUserIcon } from '../icons'

type Props = {
  work: Merge<Work, { histories: WorkHistory[] }>
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

const getCreators = (
  copyrights: Merge<
    Copyright,
    {
      userCopyrights: Merge<UserCopyright, { user: User }>[]
      anonymousUserCopyrights: Merge<
        AnonymousUserCopyright,
        { anonymousUser: AnonymousUser }
      >[]
    }
  >[],
): (User | AnonymousUser)[] => {
  const creators: (User | AnonymousUser)[] = []

  for (const copyright of copyrights) {
    for (const userCopyright of copyright.userCopyrights) {
      if (
        userCopyright.user.published &&
        !creators.includes(userCopyright.user)
      ) {
        creators.push(userCopyright.user)
      }
    }

    for (const anonymousUserCopyright of copyright.anonymousUserCopyrights) {
      if (!creators.includes(anonymousUserCopyright.anonymousUser)) {
        creators.push(anonymousUserCopyright.anonymousUser)
      }
    }
  }

  return creators
}

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
  )
}

export const WorkCardSummary = ({ work, copyrights }: Props) => {
  const creators = getCreators(copyrights)
  const [loading, setLoading] = useState(true)
  const [randomCreator, setRandomCreator] = useState(creators[0] || [])
  // @ts-expect-error anonymousUserの場合はimageがないがエラーになるため
  const randomCreatorImage = randomCreator?.image

  useEffect(() => {
    if (!loading) {
      return
    }

    setRandomCreator(creators[Math.floor(Math.random() * creators.length)])
    setLoading(false)
  }, [loading, creators])

  return (
    <>
      <Heading
        as='h2'
        letterSpacing={'0.0375rem'}
        lineHeight={1.65}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
        className={css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        `}
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
                letterSpacing={'0.025rem'}
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
                letterSpacing={'0.025rem'}
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
    </>
  )
}
