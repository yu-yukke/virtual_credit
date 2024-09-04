import '@/styles/globals.css'
import '@/styles/reset.css'

import { Noto_Sans_JP } from 'next/font/google'
import React from 'react'

import { Providers } from '@/components/common'
import { GoogleAnalytics } from '@/components/common/google-analytics'
import { Footer } from '@/components/layouts/footer'
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
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow pt-32 pb-24 grid grid-cols-[1fr_min(1232px,_calc(100%_-_60px))_1fr] *:col-start-2'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
