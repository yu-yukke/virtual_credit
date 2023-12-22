import {
  SkeletonFilterButton,
  SkeletonWorkCard,
} from '@/components/elements/skeletons'
import { Box, Grid, HStack, Spacer, css } from '@kuma-ui/core'
import { Skeleton } from '@mui/material'

export default function Loading() {
  return (
    <>
      <Box as='section' mt={86}>
        <Grid
          className={css`
            grid-template-columns: 1fr min(816px, 100%) 1fr;
          `}
        >
          <HStack as='ul' flexWrap={'wrap'} justifyContent={'center'} gap={24}>
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonFilterButton key={`SkeletonFilterButton-${i}`} />
            ))}
          </HStack>
        </Grid>
        <Grid
          py={64}
          className={css`
            grid-template-columns: 1fr min(400px, 100%) 1fr;
          `}
        >
          <Skeleton
            variant='circular'
            width={144}
            height={144}
            className={css`
              margin: 0 auto;
            `}
          />
          <Skeleton
            variant='rounded'
            width={200}
            height={54}
            className={css`
              margin: 16px auto 0;
            `}
          />
          <Skeleton
            variant='rounded'
            width={400}
            height={280}
            className={css`
              margin: 48px auto 0;
            `}
          />
          <HStack as='ul' mt={56} gap={24} justifyContent={'center'}>
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonFilterButton key={`SkeletonFilterButton-${i}`} />
            ))}
          </HStack>
        </Grid>
      </Box>
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <HStack
        as='ul'
        gap={16}
        pt={32}
        pb={12}
        px={1}
        overflow={'scroll hidden'}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonFilterButton key={`SkeletonFilterButton-${i}`} />
        ))}
      </HStack>
      <Grid
        as='section'
        py={32}
        gridTemplateColumns={'repeat(auto-fill, minmax(380px, 1fr))'}
        className={css`
          grid-column-gap: 16px;
          grid-row-gap: 24px;
        `}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonWorkCard key={`SkeletonWorkCard-${i}`} />
        ))}
      </Grid>
    </>
  )
}
