'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

type Props = {
  text: string
  href: string
}

export const NavButton = ({ text, href }: Props) => {
  const router = useRouter()

  return (
    <Button
      radius='full'
      className='px-4 text-sm tracking-wide !transition-all bg-transparent cursor-pointer !duration-400 text-secondary/60 hover:bg-background hover:text-secondary hover:shadow-headerNavButtonActive'
      onClick={() => {
        router.push(href)
      }}
    >
      {text}
    </Button>
  )
}
