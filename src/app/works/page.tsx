import { Work } from '@/types/work'

import { WorkList } from './_components'

async function getWorks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/works`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseJson = await response.json()

  return responseJson.data
}

export default async function Page() {
  const works: Work[] = await getWorks()

  return <WorkList works={works} />
}
