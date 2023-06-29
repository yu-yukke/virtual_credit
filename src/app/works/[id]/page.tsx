import { eq } from 'drizzle-orm';
import { css } from '../../../../styled-system/css';

import { Overview } from './_components/Overview';
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

  return (
    <>
      <div
        className={css({
          position: 'relative',
          w: 'full',
          h: '60vh',
          gridColumn: '1 / 4',
          bg: `linear-gradient(rgba(0, 0, 0, .4),  rgba(0, 0, 0, .4)),  url('${work.workImages[0].imageUrl}')`,
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          bgPosition: 'center',
        })}
      >
        <div
          className={css({
            w: 'full',
            px: 30,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            gap: 4,
          })}
        >
          <h1
            className={css({
              fontSize: '5xl',
              color: 'white',
              letterSpacing: 'lg',
              fontWeight: 500,
            })}
          >
            {work.name}
          </h1>
          <h2
            className={css({
              fontSize: 'md',
              color: 'white',
            })}
          >
            {work.category.name}
          </h2>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 128,
        })}
      >
        <Overview
          title={work.name}
          category={work.category}
          assets={assets}
          creators={creators}
        />
      </div>
    </>
  );
}
