import Link from 'next/link'

import { Tag } from '@/types/tag'

type Props = {
  tags: Tag[]
}

export const Tags = ({ tags }: Props) => {
  return (
    <div className='flex flex-col mt-16 gap-y-6'>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6'>
        <span className='col-span-2 col-start-1 text-sm text-tertiary'>
          タグ
        </span>
        <div className='flex flex-col col-span-2 col-start-3 text-sm gap-y-4'>
          {tags.map((tag) => (
            <Link key={tag.id} href='#' className='w-fit'>
              <span className='hover:underline hover:opacity-70'>
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
