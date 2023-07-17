import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
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
            <div
              className={css({
                position: 'relative',
                w: 40,
                h: 40,
                overflow: 'hidden',
                rounded: 'full',
              })}
            >
              <Image
                src={user.thumbnailImageUrl}
                fill
                sizes='100%'
                alt='プロフィールモーダルを開く'
              />
            </div>
          </>
        )}
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <ul
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          })}
        >
          <li>
            <SignInBtn />
          </li>
          <li>
            <SignUpBtn />
          </li>
        </ul>
      </SignedOut>
    </>
  );
};
