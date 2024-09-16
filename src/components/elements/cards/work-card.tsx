import Image from 'next/image'

import { SimpleWork } from '@/types/work'

export const WorkCard = ({ work }: { work: SimpleWork }) => {
  return (
    <div className='group'>
      <div className='relative overflow-hidden transition-all duration-500 rounded-sm aspect-video group-hover:shadow-xl'>
        <Image
          alt={work.title}
          className='object-cover transition-opacity duration-500 group-hover:opacity-90'
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${work.coverImageUrl}`}
          fill
          sizes='100%'
        />
      </div>
      <div className='px-1 py-2'>
        <h2 className='text-lg font-bold tracking-wider truncate'>
          {work.title}
        </h2>
        <p className='text-xs tracking-wide text-tertiary'>
          {work.userCount} Creators
        </p>
      </div>
    </div>
  )
}
