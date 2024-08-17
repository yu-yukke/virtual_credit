import Image from 'next/image'

import { Work } from '@/types/work'

export const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div className='group'>
      <div className='relative p-4 overflow-hidden transition-all duration-500 rounded-md aspect-video bg-tertiary/5 group-hover:shadow-md'>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${work.coverImageUrl}`}
          alt={work.title}
          fill
          sizes='100%'
          className='object-cover transition-all duration-500 group-hover:scale-105'
          loading='lazy'
        />
      </div>
      <div className='px-1 py-2'>
        <p className='text-sm tracking-wider truncate text-foreground'>
          {work.title}
        </p>
      </div>
    </div>
  )
}
