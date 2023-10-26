import { PrismaClient } from '@prisma/client';

import { randFromArray, randBoolean } from './utilities';

const prisma = new PrismaClient();

export const workCategory = async () => {
  const users = await prisma.user.findMany();
  const works = await prisma.work.findMany();
  const categories = await prisma.category.findMany();

  for (const work of works) {
    const categoryIds: string[] = [];

    // 作品に紐付けるカテゴリーIDを1件取得
    categoryIds.push(randFromArray(categories).id);

    // 50%の確率でtrueを引く限り新しいカテゴリーIDを取得
    while (randBoolean(0.5)) {
      let additionalCategoryId = randFromArray(categories).id;

      // 配列に含まれていないカテゴリーIDを1件引くまでループ
      while (categoryIds.indexOf(additionalCategoryId) !== -1) {
        additionalCategoryId = randFromArray(categories).id;
      }

      categoryIds.push(additionalCategoryId);
    }

    for (const categoryId of categoryIds) {
      await prisma.workCategory.create({
        data: {
          workId: work.id,
          categoryId: categoryId,
          createdById: randBoolean(0.8) ? randFromArray(users).id : null,
        },
      });
    }
  }
};
