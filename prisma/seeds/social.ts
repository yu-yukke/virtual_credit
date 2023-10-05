import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const social = async () => {
  const users = await prisma.user.findMany();
  const uniqueWebsiteUrls = fakerJA.helpers.uniqueArray(
    fakerJA.internet.url,
    5,
  );
  const uniqueXIds = fakerJA.helpers.uniqueArray(fakerJA.internet.userName, 5);
  const uniqueInstagramIds = fakerJA.helpers.uniqueArray(
    fakerJA.internet.userName,
    5,
  );

  for (let userIndex = 0; userIndex < users.length; userIndex++) {
    await prisma.social.create({
      data: {
        userId: users[userIndex].id,
        histories: {
          createMany: {
            data: Array(5)
              .fill(0)
              .map((_v, i) => ({
                websiteUrl: uniqueWebsiteUrls[i] + `${userIndex + i}`,
                xId: uniqueXIds[i] + `${userIndex + i}`,
                instagramId: uniqueInstagramIds[i] + `${userIndex + i}`,
              })),
          },
        },
      },
    });
  }
};
