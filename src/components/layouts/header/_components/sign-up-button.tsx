import { Button } from '@nextui-org/react'

export const SignUpButton = () => {
  return (
    <Button
      variant='light'
      radius='full'
      className='px-4 text-sm tracking-wide text-white transition-all cursor-pointer duration-400 bg-gradient-to-tr from-sky-500 to-fuchsia-500 hover:opacity-90 hover:shadow-sm'
    >
      Sign Up
    </Button>
  )
}
