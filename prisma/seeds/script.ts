import { PrismaClient } from '@prisma/client';
import { releaseNote } from './release-note';
import { skill } from './skill';
import { social } from './social';
import { user } from './user';
import { userSkill } from './user-skill';

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

  await user();
  await social();
  await skill();
  await userSkill();
  await releaseNote();

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
