'use client';

import { Box, Button, HStack, Text, css } from '@kuma-ui/core';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { useCallback, useState } from 'react';
import { User } from '@/db/schema';

const inter = Inter({ weight: '400', subsets: ['latin'] });

type UsersContentsProps = {
  creator: User;
  children: React.ReactNode;
};

type TabProps = 'works' | 'profile';

export const UsersContents = ({ creator, children }: UsersContentsProps) => {
  const [activeTab, setActiveTab] = useState<TabProps>('works');
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, type: TabProps) => {
      setActiveTab(type);
    },
    [],
  );

  const TabButton = ({
    type,
    content,
  }: {
    type: TabProps;
    content: string;
  }) => {
    return (
      <Button
        fontSize={'0.875rem'}
        py={16}
        px={24}
        cursor={'pointer'}
        letterSpacing={1}
        className={clsx(
          inter.className,
          css`
            transition: all 0.3s;
            margin-bottom: -1px;
          `,
          activeTab == type
            ? css`
                font-weight: bold;
                border-bottom: 1px solid #2b2b2b;
              `
            : css`
                color: #aeaeae;
                border-bottom: 1px solid transparent;
              `,
        )}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(e, type)
        }
      >
        {content}
      </Button>
    );
  };

  return (
    <Box mt={48}>
      <HStack borderBottom={'1px solid #E8E8E8'}>
        <TabButton type={'works'} content={'MY WORKS'} />
        <TabButton type={'profile'} content={'ABOUT ME'} />
      </HStack>
      <Box pt={32} pb={64}>
        {activeTab == 'works' ? (
          <Box>{children}</Box>
        ) : (
          <Box>
            <Text lineHeight={1.8} letterSpacing={1} whiteSpace={'pre-wrap'}>
              {creator.description}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
