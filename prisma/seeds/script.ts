import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);

  await prisma.user.deleteMany();
  await prisma.anonymousUser.deleteMany();

  await prisma.work.deleteMany();

  await prisma.skill.deleteMany();
  await prisma.category.deleteMany();
  await prisma.tag.deleteMany();

  await prisma.releaseNote.deleteMany();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
