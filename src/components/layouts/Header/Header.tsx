'use client';

import { HStack, Box, css, Button } from '@kuma-ui/core';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { HeaderNavButton } from '@/components/elements/buttons';
import { SearchIcon } from '@/components/elements/icons';

export const Header = () => {
  const [position, setPosition] = useState<number>(0);
  const breakPosition = 50;
  const scrollEvent = useCallback(() => {
    const offset = window.scrollY;

    setPosition(offset);
  }, []);

  useEffect(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <Box
      as='header'
      position={'fixed'}
      top={24}
      width={'100%'}
      px={30}
      zIndex={10}
    >
      <Box
        as='nav'
        p={8}
        mx={'auto'}
        maxWidth={'fit-content'}
        borderRadius={'1.5rem'}
        bg={'colors.bgPrimary'}
        transition={'all 0.4s'}
        _hover={{
          bg: 'white',
          boxShadow:
            '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
        }}
        className={
          (position > breakPosition || undefined) &&
          css`
            background: white;
            box-shadow:
              0px 1px 2px -1px rgba(41, 44, 49, 0.06),
              0px 0px 0px 1px rgba(15, 16, 18, 0.06),
              0px 2px 4px 0px rgba(73, 79, 90, 0.04);
          `
        }
      >
        <HStack as='ul' alignItems={'center'} gap={4}>
          <li>
            <Link href='/'>
              <HeaderNavButton text='Home' />
            </Link>
          </li>
          <li>
            <HeaderNavButton text='Explore' />
          </li>
          <li>
            <Link href='/contact'>
              <HeaderNavButton text='Contact' />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <HeaderNavButton text='Sign in' />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Button
                fontSize={'0.8125rem'}
                color={'white'}
                px={16}
                py={8}
                bg={'colors.primary'}
                borderRadius={'1.5rem'}
                _hover={{
                  opacity: 0.85,
                }}
              >
                Get Started
              </Button>
            </Link>
          </li>
          <li
            className={css`
              border-left: 1px solid #eaeaea;
              padding-left: 12px;
              margin-left: 12px;
            `}
          >
            <Button
              width={'fit-content'}
              height={'fit-content'}
              color={'colors.secondary'}
              p={8}
              borderRadius={'100%'}
              transition={'all 0.4s'}
              _hover={{
                bg: '#FAFAFA',
                boxShadow:
                  '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
              }}
              className={css`
                display: grid;
                place-items: center;
                aspect-ratio: 1 / 1;
              `}
            >
              <SearchIcon
                className={css`
                  font-size: 1em;
                  fill: t('colors.secondary');
                `}
              />
            </Button>
          </li>
        </HStack>
      </Box>
    </Box>
  );
};
