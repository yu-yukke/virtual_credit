import { Box, Grid, css } from '@kuma-ui/core'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { ReportView } from '@/components/common'
import prisma from '@/lib/prisma'
import { Summary, WorkImages } from './_components'

type Props = {
  id: string
}

export default async function Page({ params }: { params: Props }) {
  const work = await prisma.work.findUnique({
    where: {
      id: params.id,
      published: true,
    },
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workImages: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
    },
  })

  if (!work?.histories.length) {
    return redirect('/works')
  }

  return (
    <>
      <ReportView slug={`${process.env.NODE_ENV}/works-${work.id}`} />
      <Grid
        as='section'
        className={css`
          grid-template-columns: 1fr min(1024px, 100%) 1fr;
        `}
      >
        <Box
          position={'relative'}
          width={'100%'}
          height={'auto'}
          className={css`
            aspect-ratio: 16 / 9;
          `}
        >
          <Image
            src={work.workImages[0].url}
            alt='作品メインイメージ'
            fill={true}
            priority={true}
            className={css`
              object-fit: cover;
            `}
          />
        </Box>
      </Grid>
      <Summary work={work} />
      <WorkImages work={work} />
    </>
  )
}
