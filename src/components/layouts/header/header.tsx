'use client'

import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'

import { NavButton } from './_components/nav-button'

export const Header = () => {
  const [position, setPosition] = useState<number>(0)
  const breakPosition = 50
  const scrollEvent = useCallback(() => {
    const offset = window.scrollY

    setPosition(offset)
  }, [])

  useEffect(() => {
    setPosition(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [scrollEvent])

  return (
    <header className='fixed z-50 w-full px-7 top-6'>
      <nav
        className={clsx(
          'p-2 mx-auto max-w-fit rounded-3xl transition-all duration-400 hover:bg-white hover:shadow-header',
          position > breakPosition || undefined
            ? 'bg-white shadow-headerActive'
            : 'bg-background',
        )}
      >
        <div className='relative'>
          <div className='flex items-center gap-2'>
            <NavButton href='/' text='Home' />
            <NavButton href='/creators' text='Creators' />
            <NavButton href='/works' text='Works' />
          </div>
        </div>
      </nav>
    </header>
  )
}
