import Link from 'next/link'

import { Category } from '@/types/category'

type Props = {
  categories: Category[]
}

export const Categories = ({ categories }: Props) => {
  return (
    <div className='flex flex-col mt-16 gap-y-6'>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6'>
        <span className='col-span-2 col-start-1 text-sm text-tertiary'>
          カテゴリー
        </span>
        <div className='flex flex-col col-span-2 col-start-3 text-sm gap-y-4'>
          {categories.map((category) => (
            <Link key={category.id} href='#' className='w-fit'>
              <span className='hover:underline hover:opacity-70 text-secondary'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
