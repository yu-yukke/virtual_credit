import { Box, Grid, Text, css } from '@kuma-ui/core';
import { Category } from '@prisma/client';
import Link from 'next/link';

type Props = {
  categories: Category[];
};

export const Categories = ({ categories }: Props) => {
  if (!categories.length) {
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
          カテゴリー
        </Text>
      </Box>

      <Grid
        gridColumn={'3 / 5'}
        className={css`
          row-gap: 8px;
        `}
      >
        {categories.map((category) => (
          <Link
            href='/'
            key={category.id}
            className={css`
              grid-column-start: 1;
              width: fit-content;
              text-decoration: underline;
            `}
          >
            <Text as='span' fontSize={'0.875rem'}>
              {category.name}
            </Text>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};
