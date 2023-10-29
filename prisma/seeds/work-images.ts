import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const workImage = async () => {
  const works = await prisma.work.findMany();

  for (const work of works) {
    await prisma.workImage.createMany({
      data: Array(Math.floor(Math.random() * 4) + 1)
        .fill(0)
        .map((_v, i) => ({
          workId: work.id,
          url: fakerJA.image.url({ width: 1024, height: 640 }),
          createdAt: new Date(Date.now() + i * 1000),
        })),
    });
  }
};
