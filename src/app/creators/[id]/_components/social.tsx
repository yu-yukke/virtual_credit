import { HStack, css } from '@kuma-ui/core';
import { User } from '@prisma/client';
import Link from 'next/link';
import prisma from '@/lib/prisma';

type Props = {
  creator: User;
};

const SocialLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={css`
        color: t('colors.tertiary');
        font-size: 0.875rem;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      {text}
    </Link>
  );
};

export const Social = async ({ creator }: Props) => {
  const social = await prisma.social.findUnique({
    where: {
      userId: creator.id,
    },
  });

  if (!social) {
    return null;
  }

  return (
    <HStack as='ul' mt={56} gap={24} justifyContent={'center'}>
      {social.websiteUrl && (
        <li>
          <SocialLink href={social.websiteUrl} text='Website' />
        </li>
      )}
      {social.xId && (
        <li>
          <SocialLink
            href={`https://twitter.com/${social.xId}`}
            text='X（Twitter）'
          />
        </li>
      )}
      {social.instagramId && (
        <li>
          <SocialLink
            href={`https://www.instagram.com/${social.instagramId}/?hl=ja`}
            text='Instagram'
          />
        </li>
      )}
    </HStack>
  );
};
