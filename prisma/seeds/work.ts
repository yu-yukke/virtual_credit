import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const work = async () => {
  const users = await prisma.user.findMany();

  for (let i = 0; i < 50; i++) {
    const published = randBoolean(0.8);

    await prisma.work.create({
      data: {
        published: published,
        publishedAt: published ? new Date(Date.now() + i * 1000) : null,
        createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        histories: {
          createMany: {
            data: Array(5)
              .fill(0)
              .map((_v, i) => ({
                title: fakerJA.commerce.productName(),
                description: fakerJA.commerce.productDescription(),
                createdAt: new Date(Date.now() + i * 1000),
              })),
          },
        },
      },
    });
  }
};
