import { VStack, css } from '@kuma-ui/core';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

import { UserMenuContentsItem } from './user-menu-contents-item';
import { UserMenuContentsSeparator } from './user-menu-contents-separator';

export const DropdownMenuContents = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <DropdownMenu.Content
      side='bottom'
      className={clsx(
        'content',
        css`
          min-width: 160px;
          margin-top: 16px;
          background: white;
          padding: 8px;
          border-radius: 16px;
          box-shadow:
            hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
            hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
          animation-duration: 400ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        `,
      )}
    >
      <VStack gap={2}>
        <UserMenuContentsItem text='作品を登録する' href='/' />
      </VStack>
      <UserMenuContentsSeparator />
      <VStack gap={2}>
        <UserMenuContentsItem text='マイページ' href='/' />
        <UserMenuContentsItem text='アカウント設定' href='/' />
      </VStack>
      <UserMenuContentsSeparator />
      <VStack gap={2}>
        <UserMenuContentsItem
          text='ログアウト'
          href='/'
          className={css`
            color: #f36b6b;
            &:hover {
              background: #fff3f3;
            }
          `}
        />
      </VStack>
    </DropdownMenu.Content>
  );
};
