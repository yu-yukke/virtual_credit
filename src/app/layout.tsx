import '@/styles/globals.css'
import '@/styles/reset.css'

import { Inter } from 'next/font/google'
import React from 'react'

import { GoogleAnalytics } from '@/components/common/google-analytics'
import { Header } from '@/components/layouts/header'

const inter = Inter({ weight: '400', subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Virtual Credit',
  description: 'portfolio of the creators, by the creators, for the creators',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ja'>
      <GoogleAnalytics />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
