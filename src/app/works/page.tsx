import { PaginationMeta } from '@/types/meta'
import { SimpleWork } from '@/types/work'

import { PaginationComponent } from '@/components/common'
import { WorkList } from './_components'

async function getWorks(page: number | null) {
  const fetchUrl = page
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/works?page=${page}`
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/works`
  const response = await fetch(fetchUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseJson = await response.json()
  const works = responseJson.data
  const meta = responseJson.meta

  return { works, meta }
}

export default async function Page({
  searchParams,
}: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || null
  const { works, meta }: { works: SimpleWork[]; meta: PaginationMeta } =
    await getWorks(page)

  return (
    <>
      <WorkList works={works} />
      <PaginationComponent
        currentPage={meta.currentPage}
        total={meta.totalPages}
        baseUrl='/works'
      />
    </>
  )
}
