import { Text, css } from '@kuma-ui/core';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  text: string;
  href?: string | null;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | null;
  className?: string;
} & (
  | { href: string; onClick?: never }
  | { onClick: React.MouseEventHandler<HTMLAnchorElement>; href?: never }
);

export const UserMenuContentsItem = ({
  text,
  href,
  onClick,
  className,
}: Props) => {
  return (
    <Link href={'/'}>
      <DropdownMenu.Item
        className={clsx(
          className,
          css`
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
          `,
        )}
      >
        <Text as='span' fontSize={'0.8125rem'} lineHeight={1}>
          {text}
        </Text>
      </DropdownMenu.Item>
    </Link>
  );
};
