import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const workTag = async () => {
  const users = await prisma.user.findMany();
  const works = await prisma.work.findMany();
  const tags = await prisma.tag.findMany();

  for (const work of works) {
    const tagIds: string[] = [];

    // 作品に紐付けるタグIDを1件取得
    tagIds.push(randFromArray(tags).id);

    // 50%の確率でtrueを引く限り新しいタグIDを取得
    while (randBoolean(0.5)) {
      let additionalTagId = randFromArray(tags).id;

      // 配列に含まれていないタグIDを1件引くまでループ
      while (tagIds.indexOf(additionalTagId) !== -1) {
        additionalTagId = randFromArray(tags).id;
      }

      tagIds.push(additionalTagId);
    }

    for (const tagId of tagIds) {
      await prisma.workTag.create({
        data: {
          workId: work.id,
          tagId: tagId,
          createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        },
      });
    }
  }
};
