import { fakerJA } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const copyright = async () => {
  const users = await prisma.user.findMany();
  const anonymousUsers = await prisma.anonymousUser.findMany();
  const works = await prisma.work.findMany();

  for (let i = 0; i < works.length; i++) {
    const copyright = await prisma.copyright.create({
      data: {
        workId: works[i].id,
        name: fakerJA.person.jobType() + `${i}`,
        createdAt: new Date(Date.now() + i * 1000),
      },
    });
    const userIds: string[] = [];
    const anonymousUserIds: string[] = [];

    // 作品クレジットに紐付けるユーザーIDを1件取得
    userIds.push(randFromArray(users).id);

    // 50%の確率でtrueを引く限り新しい登録ユーザーIDを取得
    while (randBoolean(0.5)) {
      let additionalUserId = randFromArray(users).id;

      // 配列に含まれていないユーザーIDを1件引くまでループ
      while (userIds.indexOf(additionalUserId) !== -1) {
        additionalUserId = randFromArray(users).id;
      }

      userIds.push(additionalUserId);
    }

    // 登録ユーザーアカウントのクレジット紐づけ
    for (const userId of userIds) {
      await prisma.userCopyright.create({
        data: {
          copyrightId: copyright.id,
          userId: userId,
          createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        },
      });
    }

    // 20%の確率でtrueを引く限り新しい未登録ユーザーIDを取得
    while (randBoolean(0.2)) {
      let additionalAnonymousUserId = randFromArray(anonymousUsers).id;

      // 配列に含まれていないユーザーIDを1件引くまでループ
      while (anonymousUserIds.indexOf(additionalAnonymousUserId) !== -1) {
        additionalAnonymousUserId = randFromArray(anonymousUsers).id;
      }

      anonymousUserIds.push(additionalAnonymousUserId);
    }

    // 未登録ユーザーアカウントのクレジット紐づけ
    for (const anonymousUserId of anonymousUserIds) {
      await prisma.anonymousUserCopyright.create({
        data: {
          copyrightId: copyright.id,
          anonymousUserId: anonymousUserId,
          createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        },
      });
    }
  }
};
