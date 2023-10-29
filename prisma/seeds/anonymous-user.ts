import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const anonymousUser = async () => {
  const users = await prisma.user.findMany();
  const uniqueNames = fakerJA.helpers.uniqueArray(fakerJA.person.fullName, 20);

  await prisma.anonymousUser.createMany({
    data: Array(20)
      .fill(0)
      .map((_v, i) => ({
        name: uniqueNames[i],
        userId: randBoolean(0.5) ? users[i].id : null,
        createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        createdAt: new Date(Date.now() + i * 1000),
      })),
  });
};
