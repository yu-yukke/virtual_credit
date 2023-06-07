import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Virtual Credit',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
