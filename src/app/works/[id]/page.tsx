import { eq } from 'drizzle-orm';
import { css } from '../../../../styled-system/css';

import { Assets } from './_components/Assets';
import { KeyVisual } from './_components/KeyVisual';
import { Overview } from './_components/Overview';
import { Share } from './_components/Share';
import { Tags } from './_components/Tags';
import { WorkImages } from './_components/WorkImages';
import { db } from '@/db';
import { works } from '@/db/schema';

type Props = {
  params: {
    id: number;
  };
};

export default async function Page({ params }: Props) {
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
      <KeyVisual
        title={work.name}
        category={work.category}
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
          category={work.category}
          assets={assets}
          creators={creators}
        />
        <WorkImages title={work.name} images={work.workImages} />
        {assets && <Assets assets={assets} />}
        {tags && <Tags tags={tags} />}
        <Share workTitle={work.name} />
      </div>
    </>
  );
}
