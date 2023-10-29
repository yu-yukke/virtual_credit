import { Grid, Heading, Text, VStack, css } from '@kuma-ui/core';
import {
  AnonymousUser,
  AnonymousUserCopyright,
  Category,
  Copyright,
  Tag,
  User,
  UserCopyright,
  WorkHistory,
  WorkRelation,
  WorkRelationCategory,
} from '@prisma/client';

import { Categories } from './categories';
import { Copyrights } from './copyrights';
import { Tags } from './tags';
import { WorkRelationCategories } from './work-relation-categories';
import { Merge } from '@/types/merge';

type Props = {
  viewCount: number;
  latestWorkHistory: WorkHistory;
  copyrights: Merge<
    Copyright,
    {
      userCopyrights: Merge<
        UserCopyright,
        {
          user: User;
        }
      >[];
      anonymousUserCopyrights: Merge<
        AnonymousUserCopyright,
        {
          anonymousUser: AnonymousUser;
        }
      >[];
    }
  >[];
  categories: Category[];
  tags: Tag[];
  workRelationCategories: Merge<
    WorkRelationCategory,
    {
      workRelations: WorkRelation[];
    }
  >[];
};

export const Summary = ({
  viewCount,
  latestWorkHistory,
  copyrights,
  categories,
  tags,
  workRelationCategories,
}: Props) => {
  return (
    <Grid
      as='section'
      mt={32}
      className={css`
        grid-template-columns: 1fr min(400px, 100%) 1fr;
      `}
    >
      <Heading
        as='h1'
        fontSize={'2.25rem'}
        fontWeight={700}
        letterSpacing={'0.0675rem'}
        className={css`
          background: linear-gradient(
            270deg,
            #2d2d2e -26.63%,
            rgba(45, 45, 46, 0.6) 126%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        {latestWorkHistory.title}
      </Heading>
      <Text as='span' mt={4} fontSize={'0.875rem'} color={'colors.tertiary'}>
        {viewCount} views
      </Text>
      <Text
        as='p'
        letterSpacing={'0.03rem'}
        whiteSpace={'pre-wrap'}
        lineHeight={1.625}
        mt={32}
      >
        {latestWorkHistory.description}
      </Text>
      <VStack mt={64} gap={24}>
        {!!copyrights.length && <Copyrights copyrights={copyrights} />}
        {!!categories.length && <Categories categories={categories} />}
        {!!tags.length && <Tags tags={tags} />}
        {!!workRelationCategories.length && (
          <WorkRelationCategories
            workRelationCategories={workRelationCategories}
          />
        )}
      </VStack>
    </Grid>
  );
};
