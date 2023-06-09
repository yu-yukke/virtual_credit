import './globals.css';

import { jaJP } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { Noto_Sans_JP } from 'next/font/google';
import { css } from '../../styled-system/css';
import { GoogleAnalytics } from '@/components/common/GoogleAnalytics';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

const notoSansJp = Noto_Sans_JP({ weight: '400', subsets: ['latin'] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Virtual Credit',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      localization={jaJP}
      appearance={{
        variables: {
          colorPrimary: 'blue',
          colorDanger: 'red',
          colorSuccess: 'green',
          colorWarning: 'yellow',
          colorText: 'black',
          colorTextSecondary: 'gray',
        },
      }}
    >
      <html lang='ja'>
        <GoogleAnalytics />
        <body className={notoSansJp.className}>
          <Header />
          <main
            className={css({
              display: 'grid',
              gridTemplateColumns:
                '1fr min(calc(token(sizes.maxWidth) - token(spacing.baseX) * 2), calc(token(sizes.full) - 60px)) 1fr',
              '& *': {
                gridColumnStart: '2',
              },
            })}
          >
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
