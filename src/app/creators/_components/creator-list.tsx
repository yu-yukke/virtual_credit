import { CreatorCard } from '@/components/elements/cards'
import { UserWithWorks } from '@/types/user'
import Link from 'next/link'

type Props = {
  creators: UserWithWorks[]
}

export const CreatorList = ({ creators }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
      {creators.map((creator) => (
        <Link href={`/creators/${creator.slug}`} key={creator.id}>
          <CreatorCard creator={creator} />
        </Link>
      ))}
    </div>
  )
}
