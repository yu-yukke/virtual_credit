import { Box, Grid, Text, VStack, css } from '@kuma-ui/core';
import { Work } from '@prisma/client';
import Link from 'next/link';
import prisma from '@/lib/prisma';

type Props = {
  work: Work;
};

export const WorkRelationCategories = async ({ work }: Props) => {
  const workRelationCategories = await prisma.workRelationCategory.findMany({
    where: {
      workId: work.id,
    },
    include: {
      workRelations: true,
    },
  });

  if (!workRelationCategories.length) {
    return null;
  }

  return (
    <VStack gap={24}>
      {workRelationCategories.map((workRelationCategory) => (
        <Box key={workRelationCategory.id}>
          <Grid gridTemplateColumns={'repeat(4, 1fr)'} columnGap={16}>
            <Box gridColumn={'1 / 3'}>
              <Text
                as='label'
                fontSize={'0.875rem'}
                color={'colors.tertiary'}
                wordBreak={'break-all'}
                lineHeight={1.625}
              >
                {workRelationCategory.name}
              </Text>
            </Box>

            <Grid
              gridColumn={'3 / 5'}
              className={css`
                row-gap: 8px;
              `}
            >
              {workRelationCategory.workRelations.map((workRelation) => (
                <Link
                  href={workRelation.url}
                  key={workRelation.id}
                  rel='noopener noreferrer'
                  target='_blank'
                  className={css`
                    grid-column-start: 1;
                    width: fit-content;
                    text-decoration: underline;
                  `}
                >
                  <Text as='span' fontSize={'0.875rem'}>
                    {workRelation.name}
                  </Text>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </VStack>
  );
};
