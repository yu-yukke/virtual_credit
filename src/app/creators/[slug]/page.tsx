import { User } from '@/types/user'
import { KeyVisual } from './_components'

type Props = {
  slug: string
}

async function getCreator(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/${slug}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseJson = await response.json()

  return responseJson.data
}

export default async function Page({ params }: { params: Props }) {
  const creator: User = await getCreator(params.slug)

  return (
    <>
      <KeyVisual creator={creator} />
    </>
  )
}
