import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Tag } from '@/db/schema';

type TagList = Tag[];

async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/tags`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Tags = async () => {
  const tags: TagList = await getTags();

  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      })}
    >
      <li>
        <CheckBoxButton id='tag_all' value={-1} label='すべて' />
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <CheckBoxButton
            id={`tag_${tag.id}`}
            value={tag.id}
            label={tag.name}
          />
        </li>
      ))}
    </ul>
  );
};
