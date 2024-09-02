import Link from 'next/link'

import { Asset } from '@/types/asset'

type Props = {
  assets: Asset[]
}

export const Assets = ({ assets }: Props) => {
  return (
    <div className='flex flex-col mt-16 gap-y-6'>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6'>
        <span className='col-span-2 col-start-1 text-sm text-tertiary'>
          アセット
        </span>
        <div className='flex flex-col col-span-2 col-start-3 text-sm gap-y-4'>
          {assets.map((asset) => (
            <Link key={asset.id} href='#' className='w-fit'>
              <span className=''>{asset.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
