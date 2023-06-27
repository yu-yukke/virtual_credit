import { css } from '../../../styled-system/css';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: Props) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'stretch',
        minH: 'screen',
      })}
    >
      <Header />
      <main
        className={css({
          w: 'full',
          mx: 'auto',
          px: 'baseX',
          py: 'baseY',
          maxW: 'maxWidth',
          flex: '1 1 0',
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
