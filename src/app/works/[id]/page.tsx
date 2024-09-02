import Image from 'next/image'
import Link from 'next/link'

import { Work } from '@/types/work'

import { Assets } from './_components/assets'
import { Categories } from './_components/categories'
import { Copyrights } from './_components/copyrights'
import { Images } from './_components/images'
import { Tags } from './_components/tags'

type Props = {
  id: string
}

async function getWork(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/works/${id}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseJson = await response.json()

  return responseJson.data
}

export default async function Page({ params }: { params: Props }) {
  const work: Work = await getWork(params.id)

  return (
    <>
      <div className='relative h-2/5 min-h-[40rem] max-h-[600px]'>
        <Image
          alt={work.title}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${work.coverImageUrl}`}
          fill
          className='object-cover'
        />
      </div>
      <div className='grid grid-cols-10 mt-12 gap-x-6 gap-y-24'>
        <div className='col-span-4 col-start-4'>
          <h1 className='text-4xl font-bold tracking-wider'>{work.title}</h1>
          <p className='mt-12 leading-relaxed tracking-wide whitespace-pre-wrap'>
            {work.description}
          </p>

          <Copyrights copyrights={work.copyrights} />

          {work.categories.length > 0 && (
            <Categories categories={work.categories} />
          )}

          {work.tags.length > 0 && <Tags tags={work.tags} />}

          {work.assets.length > 0 && <Assets assets={work.assets} />}
        </div>
        {work.images.length > 0 && <Images images={work.images} />}
      </div>
    </>
  )
}
