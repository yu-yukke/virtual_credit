import classNames from 'classnames';
import { Inter, Roboto_Condensed } from 'next/font/google';
import { css } from '../../../../../styled-system/css';
import { Asset, Category, User } from '@/db/schema';

const inter = Inter({ weight: '600', subsets: ['latin'] });
const robotoCondensed = Roboto_Condensed({
  style: 'normal',
  weight: '700',
  subsets: ['latin'],
});

type Props = {
  title: string;
  category: Category;
  creators: User[];
  assets?: Asset[];
};

export const Overview = ({ title, category, creators, assets }: Props) => {
  return (
    <section
      className={css({
        py: 128,
      })}
    >
      <h3
        className={classNames(
          robotoCondensed.className,
          css({
            color: 'tertiary',
            fontSize: 'xl',
            letterSpacing: '0.38em',
            textAlign: 'center',
          }),
        )}
      >
        OVERVIEW
      </h3>
      <div
        className={css({
          w: 'full',
          maxW: '680px',
          margin: '48px auto 0',
          display: 'flex',
          flexDir: 'column',
          gap: 8,
        })}
      >
        {/* title */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <label
            className={classNames(
              inter.className,
              css({
                fontSize: 'sm',
                w: '2/5',
                lineHeight: '28px',
                letterSpacing: '0.14em',
              }),
            )}
          >
            Title
          </label>
          <span
            className={css({
              fontSize: 'sm',
              w: '3/5',
              lineHeight: '28px',
              letterSpacing: '0.08em',
              wordBreak: 'keep-all',
            })}
          >
            {title}
          </span>
        </div>
        {/* title end */}
        {/* category */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <label
            className={classNames(
              inter.className,
              css({
                fontSize: 'sm',
                w: '2/5',
                lineHeight: '28px',
                letterSpacing: '0.14em',
              }),
            )}
          >
            Category
          </label>
          <span
            className={css({
              fontSize: 'sm',
              w: '3/5',
              lineHeight: '28px',
              letterSpacing: '0.08em',
              wordBreak: 'keep-all',
            })}
          >
            {category.name}
          </span>
        </div>
        {/* category end */}
        {/* creators */}
        <div
          className={css({
            display: 'flex',
            w: 'full',
            gap: 32,
          })}
        >
          <label
            className={classNames(
              inter.className,
              css({
                fontSize: 'sm',
                w: '2/5',
                lineHeight: '28px',
                letterSpacing: '0.14em',
              }),
            )}
          >
            Creators
          </label>
          <span
            className={css({
              fontSize: 'sm',
              w: '3/5',
              lineHeight: '28px',
              letterSpacing: '0.08em',
              wordBreak: 'keep-all',
            })}
          >
            クリエイター名, クリエイター名, クリエイター名, クリエイター名
          </span>
        </div>
        {/* creators end */}
        {/* assets */}
        {assets && (
          <div
            className={css({
              display: 'flex',
              w: 'full',
              gap: 32,
            })}
          >
            <label
              className={classNames(
                inter.className,
                css({
                  fontSize: 'sm',
                  w: '2/5',
                  lineHeight: '28px',
                  letterSpacing: '0.14em',
                }),
              )}
            >
              Assets
            </label>
            <span
              className={css({
                fontSize: 'sm',
                w: '3/5',
                lineHeight: '28px',
                letterSpacing: '0.08em',
                wordBreak: 'keep-all',
              })}
            >
              {assets.map((asset) => asset.name).join(' , ')}
            </span>
          </div>
        )}
        {/* assets end */}
      </div>
    </section>
  );
};
