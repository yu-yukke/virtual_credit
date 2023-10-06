import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray } from './utilities';

const prisma = new PrismaClient();

export const social = async () => {
  const users = await prisma.user.findMany();
  const uniqueWebsiteUrls = fakerJA.helpers.uniqueArray(
    fakerJA.internet.url,
    20,
  );
  const uniqueXIds = fakerJA.helpers.uniqueArray(fakerJA.internet.userName, 20);
  const uniqueInstagramIds = fakerJA.helpers.uniqueArray(
    fakerJA.internet.userName,
    20,
  );

  for (let i = 0; i < users.length; i++) {
    await prisma.social.create({
      data: {
        userId: users[i].id,
        websiteUrl: randFromArray(uniqueWebsiteUrls) + `${i}`,
        xId: randFromArray(uniqueXIds) + `${i}`,
        instagramId: randFromArray(uniqueInstagramIds) + `${i}`,
      },
    });
  }
};
