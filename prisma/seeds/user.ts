import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const user = async () => {
  const uniqueSlugs = fakerJA.helpers.uniqueArray(
    fakerJA.internet.userName,
    20,
  );

  await prisma.user.createMany({
    data: Array(50)
      .fill(0)
      .map((_v, i) => ({
        name: fakerJA.person.fullName(),
        email: fakerJA.internet.email(),
        image: fakerJA.image.avatar(),
        slug: uniqueSlugs[i],
        description: fakerJA.lorem.paragraphs({ min: 1, max: 5 }),
        published: fakerJA.datatype.boolean({ probability: 0.8 }),
        createdAt: new Date(Date.now() + i * 1000),
      })),
  });
};
