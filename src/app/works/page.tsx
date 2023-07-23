import { Box, Heading, VStack } from '@kuma-ui/core';
import { desc } from 'drizzle-orm';
import { Inter } from 'next/font/google';

import { Categories } from './_components/Categories';
import { Tags } from './_components/Tags';
import { Works } from './_components/Works';
import { db } from '@/db';
import { categories, tags, work_images } from '@/db/schema';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });

async function getWorks() {
  const result = await db.query.works.findMany({
    with: {
      category: true,
      workImages: {
        orderBy: [desc(work_images.isMain)],
      },
    },
  });

  return await result;
}

async function getCategories() {
  const result = await db.select().from(categories);

  return await result;
}

async function getTags() {
  const result = await db.select().from(tags);

  return await result;
}

export default async function Page() {
  const works = await getWorks();
  const categories = await getCategories();
  const tags = await getTags();

  return (
    <Box py={64}>
      <Heading
        as='h1'
        fontSize={'1.5rem'}
        color={'colors.text.tertiary'}
        className={inter500.className}
      >
        Works
      </Heading>
      <VStack mt={24} gap={16}>
        <Categories categories={categories} />
        <Tags tags={tags} />
      </VStack>
      <Box mt={48}>
        <Works works={works} />
      </Box>
    </Box>
  );
}
