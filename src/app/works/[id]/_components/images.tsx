import Image from 'next/image'

import { WorkImage } from '@/types/work'

type Props = {
  images: WorkImage[]
}

export const Images = ({ images }: Props) => {
  return (
    <div className='flex flex-col items-center col-span-8 col-start-2 mt-20 gap-y-12'>
      {images.map((image, index) => (
        <Image
          key={image.url}
          alt={`作品画像_${index}`}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.url}`}
          fill
          className='object-contain !relative !w-auto'
        />
      ))}
    </div>
  )
}
