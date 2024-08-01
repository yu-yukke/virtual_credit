'use client'

import { SearchIcon } from '@/components/elements/icons/search-icon'
import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { Logo } from './_components/logo'

export const Header = () => {
  return (
    <Navbar maxWidth='full'>
      <NavbarContent as='div' className='!flex-grow-0 !basis-auto'>
        <Logo />
      </NavbarContent>
      <NavbarContent
        as='div'
        className='items-center !flex-grow'
        justify='center'
      >
        <Input
          classNames={{
            base: 'max-w-full h-10',
            mainWrapper: 'h-full',
            input: ['text-small', 'placeholder:text-tertiary/50'],
            inputWrapper:
              'h-full font-normal text-tertiary bg-tertiary/5 hover:!bg-tertiary/10',
          }}
          placeholder='作品・クリエイターを探す'
          size='sm'
          startContent={<SearchIcon />}
          type='search'
        />
      </NavbarContent>
      <NavbarContent className='!flex-grow-0' justify='end'>
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
