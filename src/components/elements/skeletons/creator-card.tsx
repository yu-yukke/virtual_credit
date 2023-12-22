import { Box, Grid, VStack, css } from '@kuma-ui/core'
import { Skeleton } from '@mui/material'

export const CreatorCard = () => {
  return (
    <Grid
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
      <Box position={'relative'} mb={48}>
        <Skeleton
          variant='rounded'
          width={'100%'}
          height={'auto'}
          className={css`
            aspect-ratio: 16 / 7;
          `}
        />
        <Box
          position={'absolute'}
          bottom={0}
          left={'50%'}
          transform={'translate(-50%, 40%)'}
        >
          <Skeleton
            variant='circular'
            width={124}
            height={124}
            className={css`
              border: 2px solid white;
            `}
          />
        </Box>
      </Box>
      <VStack px={24} gap={8} alignItems={'center'}>
        <Skeleton variant='rounded' width={'40%'} height={24} />
        <Skeleton variant='rounded' width={'60%'} height={24} />
      </VStack>
      <Skeleton
        variant='rounded'
        width={'85%'}
        height={120}
        className={css`
          margin: 0 auto;
        `}
      />
    </Grid>
  )
}
