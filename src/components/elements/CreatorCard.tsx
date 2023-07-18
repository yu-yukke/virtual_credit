import { Box, Heading, VStack, css } from '@kuma-ui/core';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';

import { Job, JobMapping, User } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type CreatorCardProps = {
  creator: User;
  jobMappings: (JobMapping & { job: Job })[];
};

export const CreatorCard = ({ creator, jobMappings }: CreatorCardProps) => {
  return (
    <Box
      width={'100%'}
      height={'auto'}
      bg={'white'}
      p={20}
      borderRadius={'0.75rem'}
      overflow={'hidden'}
      boxShadow={
        '0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08)'
      }
      transition={'all 0.6s'}
      _hover={{
        boxShadow:
          '0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08), 0px 2px 4px 0px rgba(23, 13, 13, 0.1)',
      }}
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
            className={css`
              object-fit: cover;
              transition: all 0.6s;
            `}
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
            letterSpacing={0.06}
            className={notoSansJp500.className}
          >
            {creator.name}
          </Heading>
          <p
            className={css`
              width: 100%;
              font-size: 0.75rem;
              text-align: center;
              color: #777272;
              word-break: keep-all;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            `}
          >
            {jobMappings.map((jobMap) => jobMap.job.name).join(', ')}
          </p>
        </VStack>
      </VStack>
    </Box>
  );
};
