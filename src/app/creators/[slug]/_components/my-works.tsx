import Link from 'next/link'

import { WorkCard } from '@/components/elements/cards'
import { SimpleWork } from '@/types/work'

type Props = {
  works: SimpleWork[]
}

export const MyWorks = ({ works }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
      {works.map((work) => (
        <Link href={`/works/${work.id}`} key={work.id}>
          <WorkCard work={work} />
        </Link>
      ))}
    </div>
  )
}
