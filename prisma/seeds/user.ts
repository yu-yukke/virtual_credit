import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randBoolean } from './utilities';

const prisma = new PrismaClient();

export const user = async () => {
  const uniqueSlugs = fakerJA.helpers.uniqueArray(
    fakerJA.internet.userName,
    20,
  );

  for (let i = 0; i < 50; i++) {
    const published = randBoolean(0.8);

    await prisma.user.create({
      data: {
        name: fakerJA.person.fullName(),
        email: fakerJA.internet.email(),
        image: fakerJA.image.avatar(),
        slug: uniqueSlugs[i],
        description: fakerJA.lorem.paragraphs({ min: 1, max: 5 }),
        published: published,
        publishedAt: published ? new Date(Date.now() + i * 1000) : null,
        createdAt: new Date(Date.now() + i * 1000),
      },
    });
  }
};
