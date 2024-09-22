import { SimpleWork } from '@/types/work'

import { WorkCard } from '@/components/elements/cards'
import Link from 'next/link'

type Props = {
  works: SimpleWork[]
}

export const WorkList = ({ works }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
      {works.map((work) => (
        <Link href={`/works/${work.id}`} key={work.id}>
          <WorkCard work={work} />
        </Link>
      ))}
    </div>
  )
}
