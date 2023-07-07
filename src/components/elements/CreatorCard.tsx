import classNames from 'classnames';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import { css } from '../../../styled-system/css';

import { Job, JobMapping, User } from '@/db/schema';

const notoSansJp500 = Noto_Sans_JP({ weight: '500', subsets: ['latin'] });

type CreatorCardProps = {
  creator: User & { jobMappings: (JobMapping & { job: Job })[] };
};

export const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div
      className={css({
        w: 'full',
        h: 'auto',
        bg: 'white',
        p: 20,
        rounded: 'xl',
        overflow: 'hidden',
        shadow: 'float',
        transition: 'all 0.3s',
        _groupHover: {
          shadow: 'floatHover',
          transform: 'translateY(-4px)',
        },
      })}
    >
      <figure
        className={css({
          position: 'relative',
          w: 'full',
          h: 'auto',
          aspectRatio: 'wide',
          rounded: 'lg',
          overflow: 'hidden',
          shadow: 'float',
        })}
      >
        {/* TODO: デフォルト画像設置 or 作品画像へ */}
        {creator.coverImageUrl && (
          <Image
            fill
            src={creator.coverImageUrl}
            alt={`${creator.name}のカバー画像`}
            sizes='100%'
            className={css({
              objectFit: 'cover',
            })}
          />
        )}
      </figure>
      <div
        className={css({
          py: 32,
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          gap: 16,
        })}
      >
        <figure
          className={css({
            position: 'relative',
            w: '88px',
            h: '88px',
            aspectRatio: 'square',
            rounded: 'full',
            overflow: 'hidden',
          })}
        >
          <Image
            fill
            src={creator.thumbnailImageUrl}
            alt={`${creator.name}のサムネイル画像`}
            sizes='100%'
            className={css({
              objectFit: 'cover',
            })}
          />
        </figure>
        <div
          className={css({
            w: '4/5',
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            gap: 4,
          })}
        >
          <h2
            className={classNames(
              notoSansJp500.className,
              css({
                w: 'full',
                textAlign: 'center',
                fontSize: 'md',
                letterSpacing: 'lg',
              }),
            )}
          >
            {creator.name}
          </h2>
          <p
            className={css({
              w: 'full',
              fontSize: 'xs',
              color: 'secondary',
              wordBreak: 'keep-all',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
          >
            {creator.jobMappings.map((jobMap) => jobMap.job.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};
