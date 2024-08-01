import '@/styles/globals.css'
import '@/styles/reset.css'

import { Noto_Sans_JP } from 'next/font/google'
import React from 'react'

import { Providers } from '@/components/common'
import { GoogleAnalytics } from '@/components/common/google-analytics'
import { Header } from '@/components/layouts/header'

const notoSansJp = Noto_Sans_JP({ weight: '400', subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Virtual Credit',
  description: 'portfolio of the creators, by the creators, for the creators',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ja' className='light'>
      <GoogleAnalytics />
      <body className={notoSansJp.className}>
        <Providers>
          <Header />
          <main className='h-[2000px]'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
