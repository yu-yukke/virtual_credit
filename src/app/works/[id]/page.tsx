import { desc, eq } from 'drizzle-orm';
import { css } from '../../../../styled-system/css';

import { Assets } from './_components/Assets';
import { Description } from './_components/Description';
import { KeyVisual } from './_components/KeyVisual';
import { Overview } from './_components/Overview';
import { Tags } from './_components/Tags';
import { WorkImages } from './_components/WorkImages';
import { ReportView } from '@/components/common/ReportView';
import { db } from '@/db';
import {
  asset_mappings,
  assets,
  creator_mappings,
  tag_mappings,
  tags,
  users,
  work_images,
  works,
} from '@/db/schema';

type PageProps = {
  params: {
    id: number;
  };
};

async function getWork(workId: number) {
  const result = await db.query.works.findFirst({
    where: eq(works.id, workId),
    with: {
      category: true,
      workImages: {
        orderBy: [desc(work_images.isMain)],
      },
    },
  });

  return await result;
}

async function getAssets(workId: number) {
  const result = await db
    .select({ assets })
    .from(assets)
    .innerJoin(asset_mappings, eq(asset_mappings.assetId, assets.id))
    .innerJoin(works, eq(asset_mappings.workId, works.id))
    .where(eq(works.id, workId));

  return await result.map((assetMap) => assetMap.assets);
}

async function getCreators(workId: number) {
  const result = await db
    .select()
    .from(users)
    .innerJoin(creator_mappings, eq(creator_mappings.userId, users.id))
    .innerJoin(works, eq(creator_mappings.workId, works.id))
    .where(eq(works.id, workId));

  return await result.map((creatorMap) => creatorMap.users);
}

async function getTags(workId: number) {
  const result = await db
    .select()
    .from(tags)
    .innerJoin(tag_mappings, eq(tag_mappings.tagId, tags.id))
    .innerJoin(works, eq(tag_mappings.workId, works.id))
    .where(eq(works.id, workId));

  return await result.map((tagMap) => tagMap.tags);
}

export default async function Page({ params }: PageProps) {
  const work = await getWork(params.id);

  if (!work) {
    return null;
  }

  const assets = await getAssets(work.id);
  const creators = await getCreators(work.id);
  const tags = await getTags(work.id);

  return (
    <>
      <ReportView slug={`${process.env.NODE_ENV}/works-${work.id}`} />
      <KeyVisual
        title={work.name}
        categoryName={work.category.name}
        mainImageUrl={work.workImages[0].imageUrl}
      />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          pt: 128,
          pb: 384,
          gap: 128,
        })}
      >
        <Overview
          title={work.name}
          categoryName={work.category.name}
          assets={assets}
          creators={creators}
          tags={tags}
        />
        <WorkImages title={work.name} images={work.workImages} />
        <Description description={work.description} />
        {assets && <Assets assets={assets} />}
        {tags && <Tags tags={tags} />}
      </div>
    </>
  );
}
