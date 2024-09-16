import Image from 'next/image'

import { WorkImage } from '@/types/work'

type Props = {
  images: WorkImage[]
}

export const Images = ({ images }: Props) => {
  return (
    <div className='relative flex flex-col col-span-8 col-start-2 gap-y-12'>
      {images.map((image, index) => (
        <Image
          key={image.url}
          alt={`作品画像_${index}`}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.url}`}
          fill
          className='object-contain !relative !w-auto mx-auto'
          sizes='100%'
          loading='lazy'
        />
      ))}
    </div>
  )
}
