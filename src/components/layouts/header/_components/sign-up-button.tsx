import { Button } from '@nextui-org/react'

export const SignUpButton = () => {
  return (
    <Button
      variant='light'
      radius='full'
      className='px-4 text-sm tracking-wide text-white cursor-pointer bg-gradient-to-tr from-sky-500 to-fuchsia-500 hover:top-sky-400 hover:to-fuchsia-400 hover:shadow-sm'
    >
      Sign Up
    </Button>
  )
}
