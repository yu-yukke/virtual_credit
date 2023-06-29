import { and, eq } from 'drizzle-orm';
import NextImage from 'next/image';
import { css } from '../../../../styled-system/css';
import { db } from '@/db';
import { work_images } from '@/db/schema';

export default async function Page({
  params,
}: {
  params: { id: number; slug: string };
}) {
  const mainImage = await db
    .select()
    .from(work_images)
    .where(
      and(eq(work_images.workId, params.id), eq(work_images.isMain, true)),
    );
  const { imageUrl } = mainImage[0];

  return (
    <div
      className={css({
        position: 'relative',
        h: '60vh',
      })}
    >
      <NextImage
        fill
        priority
        src={imageUrl}
        alt='hoge'
        sizes='100%'
        className={css({
          objectFit: 'cover',
        })}
      />
    </div>
  );
}
