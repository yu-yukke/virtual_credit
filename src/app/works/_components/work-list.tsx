import { Work } from '@/types/work'

import { WorkCard } from '@/components/elements/cards'
import Link from 'next/link'

export const WorkList = ({ works }: { works: Work[] }) => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
      {works.map((work) => (
        <Link href='#' key={work.id}>
          <WorkCard work={work} />
        </Link>
      ))}
    </div>
  )
}
