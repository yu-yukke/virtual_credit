'use client'

import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { Logo } from './_components/logo'

export const Header = () => {
  return (
    <Navbar maxWidth='full' height='4.5rem'>
      <NavbarContent as='div'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#' className='text-secondary'>
            Creators
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/works' className='text-secondary'>
            Works
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as='div' className='items-center' justify='center'>
        <Logo />
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#' size='sm' className='text-secondary'>
            Sign In
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className='text-white'
            radius='sm'
            color='primary'
            href='#'
            variant='solid'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
