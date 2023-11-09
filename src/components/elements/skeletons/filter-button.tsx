import { css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';

export const FilterButton = () => {
  return (
    <Skeleton
      variant='rounded'
      width={120}
      height={32}
      className={css`
        white-space: nowrap;
      `}
    />
  );
};
