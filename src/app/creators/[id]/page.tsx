import { eq } from 'drizzle-orm';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { css } from '../../../../styled-system/css';
import { Property } from '../../../../styled-system/types/csstype';

import { UsersContents } from './_components/UsersContents';
import { db } from '@/db';
import { Job, JobMapping, job_mappings, users } from '@/db/schema';

type PageProps = {
  params: {
    id: number;
  };
};

export default async function Page({ params }: PageProps) {
  // TODO: publicユーザーのみにする
  const creator = await db.query.users.findFirst({
    where: eq(users.id, params.id),
  });

  if (!creator) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/creators`);
  }

  const jobMappings: (JobMapping & { job: Job })[] =
    await db.query.job_mappings.findMany({
      where: eq(job_mappings.userId, creator.id),
      with: {
        job: true,
      },
    });

  return (
    <>
      <div
        className={css({
          position: 'relative',
          w: 'full',
          h: '30vh',
          gridColumn: '1 / 4',
        })}
      >
        {/* TODO: デフォルト画像 */}
        {creator.coverImageUrl && (
          <Image
            fill
            src={creator.coverImageUrl}
            alt={`${creator.name}のカバー画像`}
            sizes='100%'
            className={css({
              objectFit: 'cover',
              position: 'relative!' as Property.Position,
              filter: 'blur(1px)',
            })}
          />
        )}
      </div>
      <div
        className={css({
          display: 'flex',
          gap: 24,
          alignItems: 'flex-end',
        })}
      >
        <Image
          src={creator.thumbnailImageUrl}
          alt={`${creator.name}のサムネイル画像`}
          width={240}
          height={240}
          className={css({
            mt: '-120px',
            position: 'relative',
            rounded: 'full',
            flexShrink: 0,
            zIndex: 10,
            shadow: 'float',
          })}
        />
        <div
          className={css({
            h: 120,
            w: 'full',
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'center',
          })}
        >
          <h1
            className={css({
              fontSize: '3xl',
              fontWeight: 600,
              letterSpacing: 'lg',
            })}
          >
            {creator.name}
          </h1>
          <h2 className={css({ color: 'secondary', fontSize: 'sm' })}>
            {jobMappings.map((jobMap) => jobMap.job.name).join(', ')}
          </h2>
          <p
            className={css({
              mt: 8,
            })}
          >
            🎉
          </p>
        </div>
      </div>
      <UsersContents creator={creator} />
    </>
  );
}
