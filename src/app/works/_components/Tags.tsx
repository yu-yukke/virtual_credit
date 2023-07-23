import { HStack } from '@kuma-ui/core';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Tag } from '@/db/schema';

type TagsProps = {
  tags: Tag[];
};

export const Tags = async ({ tags }: TagsProps) => {
  return (
    <HStack as='ul' alignItems={'center'} gap={8}>
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
    </HStack>
  );
};
