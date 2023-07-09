import { eq } from 'drizzle-orm';
import { css } from '../../../../styled-system/css';

import { Assets } from './_components/Assets';
import { Description } from './_components/Description';
import { KeyVisual } from './_components/KeyVisual';
import { Overview } from './_components/Overview';
import { Tags } from './_components/Tags';
import { WorkImages } from './_components/WorkImages';
import { ReportView } from '@/components/common/ReportView';
import { db } from '@/db';
import { works } from '@/db/schema';

type PageProps = {
  params: {
    id: number;
  };
};

export const revalidate = 60;

export default async function Page({ params }: PageProps) {
  const work = await db.query.works.findFirst({
    where: eq(works.id, params.id),
    with: {
      category: true,
      workImages: {
        orderBy: (work_images, { desc }) => [desc(work_images.isMain)],
      },
      assetMappings: {
        with: {
          asset: true,
        },
      },
      creatorMappings: {
        with: {
          user: true,
        },
      },
      tagMappings: {
        with: {
          tag: true,
        },
      },
    },
  });

  if (!work) {
    return null;
  }

  const assets = work.assetMappings.map((assetMap) => {
    return assetMap.asset;
  });
  const creators = work.creatorMappings.map((creatorMap) => {
    return creatorMap.user;
  });
  const tags = work.tagMappings.map((tagMap) => {
    return tagMap.tag;
  });

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
