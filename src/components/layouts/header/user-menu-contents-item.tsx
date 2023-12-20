'use client';

import { Text, css } from '@kuma-ui/core';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

type Props = {
  text: string;
  href?: string | null;
};

export const UserMenuContentsItem = ({ text, href }: Props) => {
  return href ? (
    <Link href={href}>
      <DropdownMenu.Item
        className={css`
          color: #6c6c75;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          padding: 8px;
          position: relative;
          user-select: none;
          outline: none;
          cursor: pointer;
          &:hover {
            background: #fafafa;
          }
        `}
      >
        <Text as='span' fontSize={'0.8125rem'} lineHeight={1}>
          {text}
        </Text>
      </DropdownMenu.Item>
    </Link>
  ) : (
    <DropdownMenu.Item
      className={css`
        color: #6c6c75;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        padding: 8px;
        position: relative;
        user-select: none;
        outline: none;
        cursor: pointer;
        &:hover {
          background: #fafafa;
        }
      `}
    >
      <Text as='span' fontSize={'0.8125rem'} lineHeight={1}>
        {text}
      </Text>
    </DropdownMenu.Item>
  );
};
