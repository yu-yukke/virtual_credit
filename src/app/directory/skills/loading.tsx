import { Box, HStack, VStack, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';

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
        <Skeleton
          variant='rounded'
          width={320}
          height={20}
          className={css`
            margin-top: 12px;
          `}
        />
      </Box>
      <VStack as='ul' gap={12} alignItems={'center'} className='full-bleed'>
        {Array.from({ length: 12 }).map((_, i) => (
          <HStack
            key={i}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={400}
          >
            <Skeleton variant='rounded' width={160} height={20} />
            <Skeleton variant='rounded' width={20} height={20} />
          </HStack>
        ))}
      </VStack>
    </>
  );
}
