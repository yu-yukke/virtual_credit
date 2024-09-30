import Image from 'next/image'
import Link from 'next/link'

import { User } from '@/types/user'

type Props = {
  creator: User
}

export const KeyVisual = ({ creator }: Props) => {
  return (
    <>
      <div className='overflow-hidden full-bleed'>
        <div className='relative overflow-hidden h-96 rounded-bl-[3000px_160px] rounded-br-[3000px_160px] -mr-24 -ml-24 pr-24 pl-24'>
          <Image
            alt={creator.name}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${creator.coverImageUrl}`}
            fill
            className='object-cover'
            priority
            sizes='100%'
          />
        </div>
      </div>
      <div className='relative py-6 pl-72'>
        <div className='absolute top-0 left-0 overflow-hidden -translate-y-1/2 border border-solid rounded-full shadow-lg h-60 w-60 aspect-square border-divider'>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${creator.thumbnailImageUrl}`}
            alt={creator.name}
            fill
            className='object-cover'
            sizes='100%'
            loading='lazy'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold tracking-wide'>{creator.name}</h1>
          <div className='flex flex-wrap gap-x-2 gap-y-1'>
            {creator.skills.map((skill, index) => (
              <div key={skill.id}>
                <Link href='#'>
                  <span className='text-sm tracking-wide text-tertiary'>
                    {skill.name}
                  </span>
                </Link>
                {index < creator.skills.length - 1 && ', '}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
