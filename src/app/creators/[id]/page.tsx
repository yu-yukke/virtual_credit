import { Box, HStack, Heading, Text, VStack, css } from '@kuma-ui/core';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { UsersContents } from './_components/UsersContents';
import { Works } from './_components/Works';
import { db } from '@/db';
import { creator_mappings, job_mappings, socials, users } from '@/db/schema';

type PageProps = {
  params: {
    id: number;
  };
};

async function getCreator(userId: number) {
  const result = await db.select().from(users).where(eq(users.id, userId));

  return result[0];
}

async function getJobs(userId: number) {
  const result = await db.query.job_mappings.findMany({
    where: eq(job_mappings.userId, userId),
    with: {
      job: true,
    },
  });

  return await result.map((jobMap) => jobMap.job);
}

async function getCreatorsWorks(creatorId: number) {
  const result = await db.query.creator_mappings.findMany({
    where: eq(creator_mappings.userId, creatorId),
    with: {
      work: {
        with: {
          category: true,
          workImages: true,
        },
      },
    },
  });

  return await result.map((creatorMap) => creatorMap.work);
}

async function getSocial(creatorId: number) {
  const result = await db
    .select()
    .from(socials)
    .where(eq(socials.userId, creatorId));

  return await result[0];
}

const SocialLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} target='_blank'>
      <Text
        as='span'
        fontSize={'0.875rem'}
        letterSpacing={1}
        color={'colors.text.secondary'}
      >
        {title}
      </Text>
      <Text
        as='span'
        ml={2}
        display={'inline-block'}
        fontSize={'0.875rem'}
        letterSpacing={1}
        color={'colors.text.secondary'}
        transform={'rotate(-45deg)'}
      >
        →
      </Text>
    </Link>
  );
};

export default async function Page({ params }: PageProps) {
  const creator = await getCreator(params.id);

  if (!creator) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/creators`);
  }

  const works = await getCreatorsWorks(creator.id);
  const jobs = await getJobs(creator.id);
  const social = await getSocial(creator.id);

  return (
    <div>
      <Box>
        <figure
          className={css`
            width: 100%;
            height: 35vh;
            position: relative;
            overflow: hidden;
          `}
        >
          {creator.coverImageUrl && (
            <Image
              fill
              src={creator.coverImageUrl}
              alt={`${creator.name}のカバー画像`}
              sizes='100%'
              className={css`
                object-fit: cover;
                position: relative !important;
              `}
            />
          )}
        </figure>
        <HStack px={40} gap={16}>
          <Image
            src={creator.thumbnailImageUrl}
            alt={`${creator.name}のサムネイル画像`}
            width={180}
            height={180}
            className={css`
              border-radius: 9999px;
              aspect-ratio: 1 / 1;
              border: 4px solid white;
              margin-top: -60px;
              z-index: 100;
            `}
          />
          <VStack py={16} gap={2}>
            <Heading
              as='h1'
              fontSize={'1.5rem'}
              fontWeight={600}
              letterSpacing={1.5}
            >
              {creator.name}
            </Heading>
            <HStack as='ul' alignItems={'center'} gap={8}>
              {jobs.map((job) => (
                <li key={job.id}>
                  <Link href={'#'}>
                    <Text
                      as='span'
                      color={'colors.text.secondary'}
                      fontSize={'0.875rem'}
                      letterSpacing={0.8}
                    >
                      {job.name}
                    </Text>
                  </Link>
                </li>
              ))}
            </HStack>
            {social && (
              <HStack mt={8} alignItems={'center'} gap={16}>
                {social.websiteUrl && (
                  <SocialLink href={social.websiteUrl} title='Website' />
                )}
                {social.xId && (
                  <SocialLink
                    href={`https://twitter.com/${social.xId}`}
                    title='X'
                  />
                )}
                {social.instagramId && (
                  <SocialLink
                    href={`https://www.instagram.com/${social.instagramId}`}
                    title='Instagram'
                  />
                )}
              </HStack>
            )}
          </VStack>
        </HStack>
      </Box>
      <UsersContents creator={creator}>
        <Works works={works} />
      </UsersContents>
    </div>
  );
}
