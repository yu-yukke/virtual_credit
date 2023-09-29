import './globals.css';
import './reset.css';

import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import { Noto_Sans_JP } from 'next/font/google';
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
    <html lang='ja'>
      <GoogleAnalytics />
      <body className={notoSansJp.className}>
        <KumaRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </KumaRegistry>
      </body>
    </html>
  );
}
