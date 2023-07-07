import {
  users,
  NewUser,
  socials,
  NewSocial,
  categories,
  NewCategory,
  works,
  NewWork,
  work_images,
  NewWorkImage,
  assets,
  NewAsset,
  asset_mappings,
  NewAssetMapping,
  tags,
  NewTag,
  tag_mappings,
  NewTagMapping,
  creator_mappings,
  NewCreatorMapping,
} from './schema';
import { db } from '.';

async function main() {
  console.log('🚀 seed投入開始 🚀');
  console.log('\n................\n');

  // ========================== user account ==========================

  // すべてのユーザーを削除
  await db.delete(users);

  // 10件のユーザーを追加
  const newUsers: NewUser[] = [];

  for (let i = 0; i < 10; i++) {
    newUsers.push({
      clerkId: `clerkId_${i + 1}`,
      name: `ユーザーアカウント_${i + 1}`,
      coverImageUrl:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfdHdpdHRlci9pbWdfMlJVMGpCVEl1dDFpRFFURWJiaHV0QTJ5MTA3LmpwZWcifQ',
      thumbnailImageUrl:
        'https://pbs.twimg.com/profile_images/1017748300835897345/ZRTAirs3_400x400.jpg',
      description:
        'このユーザーについてこのユーザーについて\nこのユーザーについてこのユーザーについて\nこのユーザーについてこのユーザーについてこのユーザーについてこのユーザーについて\n\nこのユーザーについてこのユーザーについてこのユーザーについてこのユーザーについて\nこのユーザーについてこのユーザーについてこのユーザーについてこのユーザーについて',
    });
  }

  await db.insert(users).values(newUsers);

  // ========================== social ==========================

  // すべてのソーシャルを削除
  await db.delete(socials);

  // ユーザーごとにソーシャルを追加
  const allUsersForSocial = await db.select().from(users);
  const newSocials: NewSocial[] = [];

  allUsersForSocial.forEach(async (user) => {
    newSocials.push({
      userId: user.id,
      twitterId: 'takamin_',
    });
  });

  await db.insert(socials).values(newSocials);

  // ========================== category ==========================

  // すべてのカテゴリーを削除
  await db.delete(categories);

  // 10件のカテゴリーを追加
  const newCategories: NewCategory[] = [];
  const allUsersForCategories = await db.select().from(users);

  for (let i = 0; i < 10; i++) {
    newCategories.push({
      name: `カテゴリー_${i + 1}`,
      createUserId: allUsersForCategories[0].id,
      updateUserId: allUsersForCategories[0].id,
    });
  }

  await db.insert(categories).values(newCategories);

  // ========================== work ==========================

  // すべての作品を削除
  await db.delete(works);

  // 10件の作品を追加
  const newWorks: NewWork[] = [];
  const allCategoriesForWorks = await db.select().from(categories);

  allCategoriesForWorks.forEach((category, i) => {
    newWorks.push({
      name: `作品名_${i + 1}`,
      description:
        'この作品についてこの作品についてこの作品について\nこの作品についてこの作品についてこの作品について\n\nこの作品についてこの作品について\nこの作品について\nこの作品についてこの作品についてこの作品について',
      categoryId: category.id,
    });
  });

  await db.insert(works).values(newWorks);

  // ========================== work image ==========================

  // すべてのカテゴリーを削除
  await db.delete(work_images);

  // 作品ごとに5枚ずつの画像を追加
  const newWorkImages: NewWorkImage[] = [];
  const allWorksForWorkImages = await db.select().from(works);

  allWorksForWorkImages.forEach((work) => {
    for (let i = 0; i < 5; i++) {
      newWorkImages.push({
        workId: work.id,
        imageUrl: 'https://styly.cc/wp-content/uploads/2020/08/image2.png',
        isMain: i == 0,
      });
    }
  });

  await db.insert(work_images).values(newWorkImages);

  // ========================== asset ==========================

  // すべてのアセットを削除
  await db.delete(assets);

  // 5件のアセットを追加
  const newAssets: NewAsset[] = [];
  const allUsersForAssets = await db.select().from(users);

  for (let i = 0; i < 5; i++) {
    newAssets.push({
      name: `アセット_${i + 1}`,
      url: 'https://assetstore.unity.com/packages/tools/integration/vrtk-virtual-reality-toolkit-vr-toolkit-64131?aid=1101l7pnr&utm_campaign=unity_affiliate&utm_medium=affiliate&utm_source=partnerize-linkmaker',
      imageUrl:
        'https://assetstorev1-prd-cdn.unity3d.com/key-image/456bb75f-72aa-44c6-84b0-2194d884868e.webp',
      createUserId: allUsersForAssets[0].id,
      updateUserId: allUsersForAssets[0].id,
    });
  }

  await db.insert(assets).values(newAssets);

  // ========================== asset mapping ==========================

  // すべてのアセット紐づけを削除
  await db.delete(asset_mappings);

  // 作品ごとに5件のアセットを追加
  const newAssetMappings: NewAssetMapping[] = [];
  const allAssetForAssetMappings = await db.select().from(assets);
  const allWorksForAssetMappings = await db.select().from(works);
  const allUsersForAssetMappings = await db.select().from(users);

  allWorksForAssetMappings.forEach((work) => {
    allAssetForAssetMappings.forEach((asset) => {
      newAssetMappings.push({
        workId: work.id,
        assetId: asset.id,
        createUserId: allUsersForAssetMappings[0].id,
        updateUserId: allUsersForAssetMappings[0].id,
      });
    });
  });

  await db.insert(asset_mappings).values(newAssetMappings);

  // ========================== tag ==========================

  // すべてのタグを削除
  await db.delete(tags);

  // 5件のタグを追加
  const newTags: NewTag[] = [];
  const allUsersForTags = await db.select().from(users);

  for (let i = 0; i < 5; i++) {
    newTags.push({
      name: `タグ_${i + 1}`,
      createUserId: allUsersForTags[0].id,
      updateUserId: allUsersForTags[0].id,
    });
  }

  await db.insert(tags).values(newTags);

  // ========================== tag mapping ==========================

  // すべてのタグ紐づけを削除
  await db.delete(tag_mappings);

  // 作品ごとに5件のタグ紐づけを追加
  const newTagMappings: NewTagMapping[] = [];
  const allTagForAssetMappings = await db.select().from(tags);
  const allWorksForTagMappings = await db.select().from(works);
  const allUsersForTagMappings = await db.select().from(users);

  allWorksForTagMappings.forEach((work) => {
    allTagForAssetMappings.forEach((tag) => {
      newTagMappings.push({
        workId: work.id,
        tagId: tag.id,
        createUserId: allUsersForTagMappings[0].id,
        updateUserId: allUsersForTagMappings[0].id,
      });
    });
  });

  await db.insert(tag_mappings).values(newTagMappings);

  // ========================== creator mapping ==========================

  // すべてのクリエイター紐づけを削除
  await db.delete(creator_mappings);

  // 作品ごとに10件のクリエイター紐づけを追加
  const newCreatorMappings: NewCreatorMapping[] = [];
  const allWorksForCreatorMappings = await db.select().from(works);
  const allUsersForCreatorMappings = await db.select().from(users);

  allWorksForCreatorMappings.forEach((work) => {
    allUsersForCreatorMappings.forEach((user, i) => {
      newCreatorMappings.push({
        workId: work.id,
        userId: user.id,
        isAuthor: i == 0,
        createUserId: allUsersForCreatorMappings[0].id,
        updateUserId: allUsersForCreatorMappings[0].id,
      });
    });
  });

  await db.insert(creator_mappings).values(newCreatorMappings);

  console.log('\n................\n');
  console.log('🎉 seed投入完了 🎉');
  console.log(
    '🔔 Clerkと紐づいているユーザーは存在しないので別途作成すること 🔔',
  );
}

main();
