import { PaginationMeta } from '@/types/meta'
import { UserWithWorks } from '@/types/user'

import { PaginationComponent } from '@/components/common'
import { CreatorList } from './_components'

async function getCreators(page: number | null) {
  const fetchUrl = page
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users?page=${page}`
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users`
  const response = await fetch(fetchUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseJson = await response.json()
  const creators = responseJson.data
  const meta = responseJson.meta

  return { creators, meta }
}

export default async function Page({
  searchParams,
}: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || null
  const {
    creators,
    meta,
  }: { creators: UserWithWorks[]; meta: PaginationMeta } =
    await getCreators(page)

  return (
    <>
      <CreatorList creators={creators} />
      <PaginationComponent
        currentPage={meta.currentPage}
        total={meta.totalPages}
        baseUrl='/creators'
      />
    </>
  )
}
