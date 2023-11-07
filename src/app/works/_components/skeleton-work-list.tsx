import { Grid, HStack, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';

export const SkeletonWorkList = async () => {
  return (
    <Grid
      as='section'
      py={32}
      gridTemplateColumns={'repeat(auto-fill, minmax(380px, 1fr))'}
      className={css`
        grid-column-gap: 16px;
        grid-row-gap: 24px;
      `}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <Grid
          key={i}
          gridTemplateColumns={'max-content'}
          gridTemplateRows={'subgrid'}
          gridColumnStart={'auto'}
          gridRow={'span 3'}
          p={24}
          borderRadius={'1rem'}
          overflow={'hidden'}
          className={css`
            row-gap: 24px;
            box-shadow:
              0px 2px 4px 0px rgba(23, 13, 13, 0.04),
              0px 1px 2px -1px rgba(23, 13, 13, 0.08),
              0px 0px 0px 1px rgba(23, 13, 13, 0.08);
          `}
        >
          <Skeleton
            variant='rounded'
            width={'100%'}
            height={'auto'}
            className={css`
              aspect-ratio: 16 / 9;
            `}
          />
          <Skeleton variant='rounded' width={'80%'} height={24} />
          <HStack alignItems={'center'} gap={32}>
            <HStack alignItems={'center'} gap={8}>
              <Skeleton variant='circular' width={20} height={20} />
              <Skeleton variant='rounded' width={72} height={16} />
            </HStack>
            <Skeleton variant='rounded' width={80} height={16} />
          </HStack>
        </Grid>
      ))}
    </Grid>
  );
};
