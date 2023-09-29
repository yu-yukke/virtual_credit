import { HStack, Heading } from '@kuma-ui/core';
import Link from 'next/link';

import { GlobalNavigation } from '../elements/GlobalNavigation';
import { UserMenu } from '../elements/UserMenu';

export const Header = () => {
  return (
    <header>
      <HStack
        alignItems={'center'}
        justify={'space-between'}
        width={'100%'}
        height={'100%'}
      >
        <Link href='/'>
          <Heading
            as='h1'
            fontSize={'1.25rem'}
            fontFamily={'Futura'}
            fontWeight={400}
          >
            VIRTUAL CREDIT
          </Heading>
        </Link>
        <GlobalNavigation />
        <UserMenu />
      </HStack>
    </header>
  );
};
