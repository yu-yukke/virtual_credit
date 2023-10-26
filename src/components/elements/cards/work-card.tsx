import { Grid, HStack, Heading, Text, css } from '@kuma-ui/core';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

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
  const randomCreator = creators[Math.floor(Math.random() * creators.length)];

  return (
    <Grid
      gridTemplateColumns={'max-content'}
      gridTemplateRows={'subgrid'}
      gridColumnStart={'auto'}
      gridRow={'span 3'}
      p={24}
      borderRadius={'1rem'}
      position={'relative'}
      className={css`
        row-gap: 24px;
        box-shadow:
          0px 2px 4px 0px rgba(23, 13, 13, 0.04),
          0px 1px 2px -1px rgba(23, 13, 13, 0.08),
          0px 0px 0px 1px rgba(23, 13, 13, 0.08);
      `}
    >
      <Link
        href='/'
        className={css`
          position: absolute;
          inset: 0;
          grid-column-start: auto;
        `}
      />
      <Image
        src={work.workImages[0].url}
        alt=''
        width={1600}
        height={900}
        sizes='100vw'
        className={css`
          width: 100%;
          height: auto;
          border-radius: 0.875rem;
        `}
      />
      <Heading as='h2' fontSize={'1.125rem'} letterSpacing={'0.03375rem'}>
        {work.histories[0].title}
      </Heading>
      <HStack alignItems={'center'}>
        <HStack alignItems={'center'}>
          {creators.length ? (
            <HStack gap={8} alignItems={'center'}>
              {/* @ts-expect-error anonymousUserの場合はimageがないがエラーになるため */}
              {randomCreator.image ? (
                <Image
                  // @ts-expect-error anonymousUserの場合はimageがないがエラーになるため
                  src={randomCreator.image}
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
