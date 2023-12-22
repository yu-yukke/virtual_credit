import { Categories, Tags } from '@/app/works/_components'
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper'
import prisma from '@/lib/prisma'
import { Spacer, VStack } from '@kuma-ui/core'
import { WorkList } from './_components'

type Props = {
  slug: string
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Props
  searchParams: { [key: string]: string | undefined }
}) {
  const page = Number(searchParams.page || 1)
  const worksCount = await prisma.work.count({
    where: {
      published: true,
      workTags: {
        some: {
          tag: {
            name: params.slug,
          },
        },
      },
    },
  })

  return (
    <>
      <PageHeadingWrapper
        title={`# ${decodeURI(params.slug)}`}
        description={`A collection of ${worksCount} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Categories />
        <Tags tagName={params.slug} />
      </VStack>
      <WorkList tagName={params.slug} page={page} worksCount={worksCount} />
    </>
  )
}
