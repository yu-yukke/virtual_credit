'use client'

import { Button } from '@nextui-org/react'

export const SignInButton = () => {
  return (
    <Button
      radius='full'
      className='px-4 text-sm tracking-wide !transition-all bg-transparent cursor-pointer !duration-400 text-tertiary hover:bg-background hover:text-secondary hover:shadow-headerNavButtonActive'
    >
      Sign In
    </Button>
  )
}
