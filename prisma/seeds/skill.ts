import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const skill = async () => {
  const users = await prisma.user.findMany();

  await prisma.skill.createMany({
    data: Array(20)
      .fill(0)
      .map((_v, _i) => ({
        name: fakerJA.person.jobTitle(),
        createdById: randBoolean() ? randFromArray(users).id : null,
      })),
  });
};
