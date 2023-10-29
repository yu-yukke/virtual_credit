import { Box, Grid, Text, VStack, css } from '@kuma-ui/core';
import {
  AnonymousUser,
  AnonymousUserCopyright,
  Copyright,
  User,
  UserCopyright,
} from '@prisma/client';
import Link from 'next/link';

import { Merge } from '@/types/merge';

type Props = {
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
};

export const Copyrights = ({ copyrights }: Props) => {
  if (!copyrights.length) {
    return null;
  }

  return (
    <VStack gap={24}>
      {copyrights.map((copyright) => (
        <Box key={copyright.id}>
          <Grid gridTemplateColumns={'repeat(4, 1fr)'} columnGap={16}>
            <Box gridColumn={'1 / 3'}>
              <Text
                as='label'
                fontSize={'0.875rem'}
                color={'colors.tertiary'}
                wordBreak={'break-all'}
                lineHeight={1.625}
              >
                {copyright.name}
              </Text>
            </Box>

            <Grid
              gridColumn={'3 / 5'}
              className={css`
                row-gap: 8px;
              `}
            >
              {copyright.userCopyrights.map((userCopyright) => (
                <Link
                  href='/'
                  key={`${userCopyright.copyrightId}${userCopyright.userId}`}
                  className={css`
                    grid-column-start: 1;
                    width: fit-content;
                    text-decoration: underline;
                  `}
                >
                  <Text as='span' fontSize={'0.875rem'}>
                    {userCopyright.user.name}
                  </Text>
                </Link>
              ))}
              {copyright.anonymousUserCopyrights.map(
                (anonymousUserCopyright) => (
                  <Text
                    as='span'
                    key={anonymousUserCopyright.copyrightId}
                    gridColumnStart={1}
                    fontSize={'0.875rem'}
                  >
                    {anonymousUserCopyright.anonymousUser.name}
                  </Text>
                ),
              )}
            </Grid>
          </Grid>
        </Box>
      ))}
    </VStack>
  );
};
