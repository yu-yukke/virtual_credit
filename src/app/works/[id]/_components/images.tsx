import Image from 'next/image'

import { WorkImage } from '@/types/work'

type Props = {
  images: WorkImage[]
}

export const Images = ({ images }: Props) => {
  return (
    <div className='col-span-8 col-start-2'>
      {images.map((image, index) => (
        <Image
          key={image.url}
          alt={`作品画像_${index}`}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.url}`}
          fill
          className='object-contain !relative !w-auto mx-auto'
        />
      ))}
    </div>
  )
}
