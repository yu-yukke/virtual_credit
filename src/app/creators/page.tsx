import { Box, Heading, VStack } from '@kuma-ui/core';
import { Inter } from 'next/font/google';

import { Creators } from './_components/Creators';
import { Jobs } from './_components/Jobs';
import { db } from '@/db';
import { jobs } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

async function getCreators() {
  const result = await db.query.users.findMany({
    with: {
      jobMappings: {
        with: {
          job: true,
        },
      },
    },
  });

  return await result;
}

async function getJobs() {
  const result = await db.select().from(jobs);

  return result;
}

export default async function Page() {
  const creators = await getCreators();
  const jobs = await getJobs();

  return (
    <Box py={64}>
      <Heading
        as='h1'
        color={'colors.text.tertiary'}
        fontSize={'1.5rem'}
        className={inter500.className}
      >
        Creators
      </Heading>
      <VStack mt={24} gap={16}>
        <Jobs jobs={jobs} />
      </VStack>
      <Box mt={48}>
        <Creators creators={creators} />
      </Box>
    </Box>
  );
}
