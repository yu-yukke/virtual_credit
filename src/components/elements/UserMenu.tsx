import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Box, HStack } from '@kuma-ui/core';
import { eq } from 'drizzle-orm';
import Image from 'next/image';

import { SignInBtn } from './SignInBtn';
import { SignUpBtn } from './SignUpBtn';
import { db } from '@/db';
import { users } from '@/db/schema';

type UserMenuProps = {
  userId: string | null;
};

export const UserMenu = async ({ userId }: UserMenuProps) => {
  const user = userId
    ? await db.query.users.findFirst({
        where: eq(users.clerkId, userId),
      })
    : null;

  return (
    <>
      <SignedIn>
        {user && (
          <>
            <Box
              position={'relative'}
              width={40}
              height={40}
              overflow={'hidden'}
              borderRadius={9999}
            >
              <Image
                src={user.thumbnailImageUrl}
                fill
                sizes='100%'
                alt='プロフィールモーダルを開く'
              />
            </Box>
          </>
        )}
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <HStack as='ul' alignItems={'center'} gap={12}>
          <li>
            <SignInBtn />
          </li>
          <li>
            <SignUpBtn />
          </li>
        </HStack>
      </SignedOut>
    </>
  );
};
