import { Box, Grid, HStack, Spacer, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';
import {
  SkeletonCreatorCard,
  SkeletonFilterButton,
} from '@/components/elements/skeletons';

export default function Loading() {
  return (
    <>
      <Box
        as='section'
        pt={88}
        pb={112}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Skeleton variant='rounded' width={72} height={32} />
        <Skeleton
          variant='rounded'
          width={180}
          height={20}
          className={css`
            margin-top: 24px;
          `}
        />
      </Box>
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <Box as='section' mt={20}>
        <HStack as='ul' gap={16} py={12} px={1} overflow={'scroll hidden'}>
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonFilterButton key={i} />
          ))}
        </HStack>
      </Box>
      <Grid
        as='section'
        py={32}
        gridTemplateColumns={'repeat(auto-fill, minmax(380px, 1fr))'}
        className={css`
          grid-column-gap: 16px;
          grid-row-gap: 24px;
        `}
      >
        {Array.from({ length: 21 }).map((_, i) => (
          <SkeletonCreatorCard key={i} />
        ))}
      </Grid>
    </>
  );
}
