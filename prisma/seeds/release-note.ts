import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const releaseNote = async () => {
  await prisma.releaseNote.createMany({
    data: Array(25)
      .fill(0)
      .map((_v, i) => ({
        version: `1.0.${i}`,
        title: fakerJA.lorem.paragraph(),
        description: fakerJA.lorem.paragraphs({ min: 1, max: 5 }),
        createdAt: new Date(Date.now() + i * 1000),
      })),
  });
};
