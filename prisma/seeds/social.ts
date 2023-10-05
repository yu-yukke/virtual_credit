import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const social = async () => {
  const users = await prisma.user.findMany();

  for (const user of users) {
    await prisma.social.create({
      data: {
        userId: user.id,
        histories: {
          createMany: {
            data: Array(5)
              .fill(0)
              .map((_v, _i) => ({
                websiteUrl: fakerJA.internet.url(),
                xId: fakerJA.internet.userName(),
                instagramId: fakerJA.internet.userName(),
              })),
          },
        },
      },
    });
  }
};
