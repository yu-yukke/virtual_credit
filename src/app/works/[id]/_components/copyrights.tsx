import Link from 'next/link'

import { Copyright } from '@/types/copyright'

type Props = {
  copyrights: Copyright[]
}

export const Copyrights = ({ copyrights }: Props) => {
  return (
    <div className='flex flex-col mt-16 gap-y-6'>
      {copyrights.map((copyright) => (
        <div className='grid grid-cols-4 gap-x-8 gap-y-6'>
          <Link href='#' className='col-span-2 col-start-1 w-fit'>
            <span key={copyright.id} className='text-sm text-tertiary'>
              {copyright.name}
            </span>
          </Link>
          <div className='flex flex-col col-span-2 col-start-3 text-sm gap-y-4'>
            {copyright.users.map((user) => (
              <Link key={user.id} href='#' className='w-fit'>
                <span className=''>{user.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
