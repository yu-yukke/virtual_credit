import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const userSkill = async () => {
  const users = await prisma.user.findMany();
  const skills = await prisma.skill.findMany();

  for (const user of users) {
    const skillIds: string[] = [];

    // ユーザーに紐付けるスキルIDを1件取得
    skillIds.push(randFromArray(skills).id);

    // 50%の確率でtrueを引く限り新しいスキルIDを取得
    while (randBoolean(0.5)) {
      let additionalSkillId = randFromArray(skills).id;

      // 配列に含まれていないスキルIDを1件引くまでループ
      while (skillIds.indexOf(additionalSkillId) !== -1) {
        additionalSkillId = randFromArray(skills).id;
      }

      skillIds.push(additionalSkillId);
    }

    for (const skillId of skillIds) {
      await prisma.userSkill.create({
        data: {
          userId: user.id,
          skillId: skillId,
          createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        },
      });
    }
  }
};
