import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const uniqueSlugs = fakerJA.helpers.uniqueArray(fakerJA.internet.userName, 20);

export const user = async () => {
  await prisma.user.createMany({
    data: Array(20)
      .fill(0)
      .map((_v, i) => ({
        name: fakerJA.person.fullName(),
        email: fakerJA.internet.email(),
        image: fakerJA.image.avatar(),
        slug: uniqueSlugs[i],
        description: fakerJA.lorem.paragraphs({ min: 1, max: 5 }),
        published: fakerJA.datatype.boolean({ probability: 0.8 }),
      })),
  });
};
