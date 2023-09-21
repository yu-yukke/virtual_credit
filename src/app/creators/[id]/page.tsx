import { Box, HStack, Heading, Text, VStack, css } from '@kuma-ui/core';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { UsersContents } from './_components/UsersContents';
import { Works } from './_components/Works';

type PageProps = {
  params: {
    id: number;
  };
};

const SocialLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} target='_blank'>
      <Text
        as='span'
        fontSize={'0.875rem'}
        letterSpacing={1}
        color={'colors.text.secondary'}
      >
        {title}
      </Text>
      <Text
        as='span'
        ml={2}
        display={'inline-block'}
        fontSize={'0.875rem'}
        letterSpacing={1}
        color={'colors.text.secondary'}
        transform={'rotate(-45deg)'}
      >
        →
      </Text>
    </Link>
  );
};

export default async function Page({ params }: PageProps) {

  return (
    <></>
  );
}
