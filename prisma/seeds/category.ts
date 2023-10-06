import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const category = async () => {
  const users = await prisma.user.findMany();
  const uniqueNames = fakerJA.helpers.uniqueArray(fakerJA.music.genre, 30);

  await prisma.category.createMany({
    data: Array(15)
      .fill(0)
      .map((_v, i) => ({
        name: uniqueNames[i],
        createdById: randBoolean(0.8) ? randFromArray(users).id : null,
      })),
  });
};
