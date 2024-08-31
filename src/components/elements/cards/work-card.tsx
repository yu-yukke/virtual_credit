'use client'

import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'

import { Work } from '@/types/work'

export const WorkCard = ({ work }: { work: Work }) => {
  return (
    <Card className='flex-col-reverse pt-2 pb-4 group'>
      <CardHeader className='flex-col items-start px-4 pt-2 pb-0'>
        <small className='text-xs text-tertiary'>
          {work.userCount} Creators
        </small>
        <h2 className='w-full text-base font-bold tracking-wider truncate text-foreground'>
          {work.title}
        </h2>
      </CardHeader>
      <CardBody className='py-2 overflow-visible'>
        <div className='relative overflow-hidden rounded-xl'>
          <Image
            alt={work.title}
            className='object-cover transition-all duration-500 group-hover:scale-105'
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${work.coverImageUrl}`}
          />
        </div>
      </CardBody>
    </Card>
  )
}
