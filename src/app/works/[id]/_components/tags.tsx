import { Box, Grid, Text, css } from '@kuma-ui/core';
import { Tag } from '@prisma/client';
import Link from 'next/link';

type Props = {
  tags: Tag[];
};

export const Tags = ({ tags }: Props) => {
  if (!tags.length) {
    return null;
  }

  return (
    <Grid gridTemplateColumns={'repeat(4, 1fr)'} columnGap={16}>
      <Box gridColumn={'1 / 3'}>
        <Text
          as='label'
          fontSize={'0.875rem'}
          color={'colors.tertiary'}
          wordBreak={'break-all'}
          lineHeight={1.625}
        >
          タグ
        </Text>
      </Box>

      <Grid
        gridColumn={'3 / 5'}
        className={css`
          row-gap: 8px;
        `}
      >
        {tags.map((tag) => (
          <Link
            href='/'
            key={tag.id}
            className={css`
              grid-column-start: 1;
              width: fit-content;
              text-decoration: underline;
            `}
          >
            <Text as='span' fontSize={'0.875rem'}>
              # {tag.name}
            </Text>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};
