import { eq } from 'drizzle-orm';
import Image from 'next/image';
import { css } from '../../../../styled-system/css';

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
      workImages: {
        orderBy: (work_images, { desc }) => [desc(work_images.isMain)],
      },
    },
  });

  if (!work) {
    return null;
  }

  return (
    <div
      className={css({
        position: 'relative',
        w: 'full',
        h: '60vh',
        gridColumn: '1 / 4',
      })}
    >
      <Image
        fill
        priority
        quality={100}
        src={work.workImages[0].imageUrl}
        alt={`${work.name}のメイン画像`}
        sizes='100%'
        className={css({
          objectFit: 'cover',
        })}
      />
    </div>
  );
}
