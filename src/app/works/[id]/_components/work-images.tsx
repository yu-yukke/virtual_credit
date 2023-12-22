import prisma from '@/lib/prisma'
import { Box, Grid, VStack, css } from '@kuma-ui/core'
import { Work } from '@prisma/client'
import Image from 'next/image'

import { LightBox } from '@/components/elements/images'

type Props = {
  work: Work
}

export const WorkImages = async ({ work }: Props) => {
  const workImages = await prisma.workImage.findMany({
    where: {
      workId: work.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!workImages.length) {
    return null
  }

  return (
    <Grid
      as='section'
      mt={80}
      className={css`
        grid-template-columns: 1fr min(816px, 100%) 1fr;
      `}
    >
      <VStack gap={48} alignItems={'center'}>
        {workImages.map((workImage) => (
          <LightBox key={workImage.id}>
            <Box position={'relative'}>
              <Image
                src={workImage.url}
                alt='作品イメージ'
                fill={true}
                sizes='100%'
                className={css`
              position: relative !important;
              width: auto !important;
              object-fit: contain;
            `}
              />
            </Box>
          </LightBox>
        ))}
      </VStack>
    </Grid>
  )
}
