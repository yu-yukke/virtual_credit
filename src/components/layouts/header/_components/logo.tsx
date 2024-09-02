import { Link, NavbarBrand } from '@nextui-org/react'
import Image from 'next/image'

export const Logo = () => {
  return (
    <NavbarBrand>
      <Link href='/' className='text-foreground'>
        <h1 className='text-2xl font-bold'>
          <Image src='/images/logo.png' alt='logo' width={48} height={48} />
        </h1>
      </Link>
    </NavbarBrand>
  )
}
