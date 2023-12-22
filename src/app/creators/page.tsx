import { Box, Spacer } from '@kuma-ui/core'

import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper'
import { CreatorList, Skills } from './_components'

import prisma from '@/lib/prisma'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const page = Number(searchParams.page || 1)
  const creatorsCount = await prisma.user.count({
    where: {
      published: true,
    },
  })

  return (
    <>
      <PageHeadingWrapper
        title='Creators'
        description={`A collection of ${creatorsCount} creators`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <Box as='section' mt={20}>
        <Skills />
      </Box>
      <CreatorList page={page} creatorsCount={creatorsCount} />
    </>
  )
}
