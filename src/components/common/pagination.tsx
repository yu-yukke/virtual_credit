'use client'

import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

type Props = {
  currentPage: number
  total: number
  baseUrl: string
}

export const PaginationComponent = ({ currentPage, total, baseUrl }: Props) => {
  const router = useRouter()
  const handlePageChange = (page: number) => {
    router.push(`${baseUrl}?page=${page}`)
  }

  return (
    <div className='flex justify-center w-full mt-24'>
      <Pagination
        total={total}
        initialPage={1}
        page={currentPage}
        showControls
        onChange={(page) => handlePageChange(page)}
      />
    </div>
  )
}
