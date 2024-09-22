import { UserWithWorks } from '@/types/user'
import Image from 'next/image'

type Props = {
  creator: UserWithWorks
}

export const CreatorCard = ({ creator }: Props) => {
  return (
    <div className='group'>
      <div className='p-2 border border-solid border-divider rounded-xl'>
        <div className='relative overflow-hidden rounded-xl aspect-square'>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${creator.thumbnailImageUrl}`}
            alt={creator.name}
            fill
            className='object-cover transition-all duration-300 group-hover:opacity-90'
            sizes='100%'
          />
        </div>
      </div>
      <div className='px-1 py-2'>
        <h2 className='text-lg font-bold tracking-wider truncate'>
          {creator.name}
        </h2>
        <p className='text-xs tracking-wide text-tertiary'>
          {creator.relatedWorks.length} Works
        </p>
      </div>
    </div>
  )
}
