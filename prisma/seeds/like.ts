import { PrismaClient } from '@prisma/client';

import { randBoolean, randFromArray } from './utilities';

const prisma = new PrismaClient();

export const like = async () => {
  const users = await prisma.user.findMany();
  const works = await prisma.work.findMany();

  for (const work of works) {
    const userIds: string[] = [];

    // 50%の確率でtrueを引く限り新しいユーザーIDを取得
    while (randBoolean(0.5)) {
      let additionalUserId = randFromArray(users).id;

      // 配列に含まれていないユーザーIDを1件引くまでループ
      while (userIds.indexOf(additionalUserId) !== -1) {
        additionalUserId = randFromArray(users).id;
      }

      userIds.push(additionalUserId);
    }

    for (const userId of userIds) {
      await prisma.like.create({
        data: {
          userId: userId,
          workId: work.id,
        },
      });
    }
  }
};
