import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randBoolean, randFromArray } from './utilities';

const prisma = new PrismaClient();

export const workRelation = async () => {
  const works = await prisma.work.findMany();
  const users = await prisma.user.findMany();

  for (let i = 0; i < works.length; i++) {
    await prisma.workRelationCategory.create({
      data: {
        workId: works[i].id,
        name: fakerJA.commerce.productMaterial() + `${i}`,
        createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        workRelations: {
          createMany: {
            data: Array(5)
              .fill(0)
              .map((_v, _i) => ({
                name: fakerJA.commerce.product(),
                url: fakerJA.internet.url(),
                createdById: randBoolean(0.8) ? randFromArray(users).id : null,
              })),
          },
        },
      },
    });
  }
};
