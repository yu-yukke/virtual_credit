'use client';

import { Box, HStack, Heading, Text, VStack, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { Job, JobMapping, User } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type CreatorCardProps = {
  creator: User;
  jobMappings: (JobMapping & { job: Job })[];
};

export const CreatorCard = ({ creator, jobMappings }: CreatorCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHover(e.type == 'mouseenter');
  }, []);

  return (
    <Box
      width={'100%'}
      height={'auto'}
      bg={'white'}
      p={20}
      borderRadius={'0.75rem'}
      overflow={'hidden'}
      transition={'all 0.6s'}
      className={
        isHover
          ? css`
              box-shadow:
                0px 2px 4px 0px rgba(23, 13, 13, 0.04),
                0px 1px 2px -1px rgba(23, 13, 13, 0.08),
                0px 0px 0px 1px rgba(23, 13, 13, 0.08),
                0px 2px 4px 0px rgba(23, 13, 13, 0.1);
            `
          : css`
              box-shadow:
                0px 2px 4px 0px rgba(23, 13, 13, 0.04),
                0px 1px 2px -1px rgba(23, 13, 13, 0.08),
                0px 0px 0px 1px rgba(23, 13, 13, 0.08);
            `
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <figure
        className={css`
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow:
            0px 2px 4px 0px rgba(23, 13, 13, 0.04),
            0px 1px 2px -1px rgba(23, 13, 13, 0.08),
            0px 0px 0px 1px rgba(23, 13, 13, 0.08);
        `}
      >
        {/* TODO: デフォルト画像設置 or 作品画像へ */}
        {creator.coverImageUrl && (
          <Image
            fill
            src={creator.coverImageUrl}
            alt={`${creator.name}のカバー画像`}
            sizes='100%'
            className={clsx(
              css`
                object-fit: cover;
                transition: all 0.6s;
              `,
              isHover &&
                css`
                  transform: scale(1.08);
                `,
            )}
          />
        )}
      </figure>
      <VStack mt={-52} pb={24} alignItems={'center'} gap={24}>
        <figure
          className={css`
            position: relative;
            width: 104px;
            height: 104px;
            aspect-ratio: 1 / 1;
            border-radius: 9999px;
            overflow: hidden;
            border: 4px solid white;
          `}
        >
          <Image
            fill
            src={creator.thumbnailImageUrl}
            alt={`${creator.name}のサムネイル画像`}
            sizes='100%'
            className={css`
              object-fit: cover;
            `}
          />
        </figure>
        <VStack width={'80%'} alignItems={'center'} gap={4}>
          <Heading
            as='h2'
            width={'100%'}
            textAlign={'center'}
            fontSize={'1rem'}
            letterSpacing={1}
            className={notoSansJp500.className}
          >
            {creator.name}
          </Heading>
          <HStack
            as='ul'
            width={'100%'}
            textAlign={'center'}
            wordBreak={'keep-all'}
            alignItems={'center'}
            justify={'center'}
            flexWrap={'wrap'}
            columnGap={8}
          >
            {jobMappings.map((jobMap) => (
              <li key={jobMap.id}>
                <Text
                  as='span'
                  color={'colors.text.secondary'}
                  fontSize={'0.75rem'}
                  letterSpacing={0.8}
                >
                  {jobMap.job.name}
                </Text>
              </li>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
