import { UserWithWorks } from '@/types/user'
import Image from 'next/image'

type Props = {
  creator: UserWithWorks
}

export const CreatorCard = ({ creator }: Props) => {
  return (
    <div className='h-full p-2 transition-all bg-white border border-solid rounded-md group duration-400 border-divider hover:shadow-sm'>
      <div className='relative overflow-hidden rounded-md aspect-[16/6]'>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${creator.coverImageUrl}`}
          alt={creator.name}
          fill
          className='object-cover transition-all group-hover:opacity-90 duration-400'
          sizes='100%'
          loading='lazy'
        />
      </div>
      <div className='relative py-2 pr-4 pl-28'>
        <div className='absolute top-0 w-24 h-24 overflow-hidden border border-solid rounded-full shadow-lg left-1 -translate-y-1/3 aspect-square border-divider'>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${creator.thumbnailImageUrl}`}
            alt={creator.name}
            fill
            className='object-cover'
            sizes='100%'
            loading='lazy'
          />
        </div>
        <div className='flex flex-col gap-0.5 px-1'>
          <p className='text-lg font-bold tracking-wide truncate'>
            {creator.name}
          </p>
          <p className='text-xs text-tertiary'>{`${creator.relatedWorks.length} works`}</p>
        </div>
      </div>
      <div className='px-2 py-5'>
        <p className='text-xs leading-relaxed text-tertiary line-clamp-4'>
          {creator.description}
        </p>
      </div>
    </div>
  )
}
