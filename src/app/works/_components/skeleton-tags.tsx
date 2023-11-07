import { HStack } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';

export const SkeletonTags = () => {
  return (
    <HStack
      as='ul'
      gap={20}
      py={12}
      px={1}
      overflow={'scroll hidden'}
      maskImage={'linear-gradient(to left, rgba(0, 0, 0, 0.4), white)'}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i}>
          <Skeleton variant='rounded' width={80} height={32} />
        </li>
      ))}
    </HStack>
  );
};
