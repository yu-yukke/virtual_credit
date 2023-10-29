import { Grid, VStack, css } from '@kuma-ui/core';
import { WorkImage } from '@prisma/client';
import Image from 'next/image';

type Props = {
  workImages: WorkImage[];
};

export const WorkImages = ({ workImages }: Props) => {
  return (
    <Grid
      as='section'
      mt={80}
      className={css`
        grid-template-columns: 1fr min(816px, 100%) 1fr;
      `}
    >
      <VStack gap={48}>
        {workImages.map((workImage) => (
          <Image
            key={workImage.id}
            src={workImage.url}
            alt=''
            fill
            objectFit='contain'
            className={css`
              position: relative !important;
              width: auto !important;
            `}
          />
        ))}
      </VStack>
    </Grid>
  );
};
