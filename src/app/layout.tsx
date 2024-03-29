import '@/styles/globals.css'
import '@/styles/reset.css'

import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Inter } from 'next/font/google'
import React from 'react'

import { GoogleAnalytics } from '@/components/common/google-analytics'
import { Snackbar } from '@/components/common/snackbar'
import { Header } from '@/components/layouts/header'
import { SnackbarProvider } from '@/providers'
import { NextAuthProvider } from '@/providers/next-auth'

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
        <KumaRegistry>
          <NextAuthProvider>
            <SnackbarProvider>
              <Snackbar />
              <Header />
              <main>{children}</main>
            </SnackbarProvider>
          </NextAuthProvider>
        </KumaRegistry>
      </body>
    </html>
  )
}
