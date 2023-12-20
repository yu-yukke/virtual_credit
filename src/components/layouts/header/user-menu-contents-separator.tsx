import { css } from '@kuma-ui/core';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const UserMenuContentsSeparator = () => {
  return (
    <DropdownMenu.Separator
      className={css`
        height: 1px;
        background: #e8e8e8;
        margin: 6px;
      `}
    />
  );
};
