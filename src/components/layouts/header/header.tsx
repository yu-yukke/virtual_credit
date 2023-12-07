'use client';

import '@/styles/radix/navigation-menu.css';

import { Box, css, Button, VStack, Heading, Text, Grid } from '@kuma-ui/core';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { HeaderNavButton } from '@/components/elements/buttons';
import { SearchIcon } from '@/components/elements/icons';
import { LogInModal, SignUpModal } from '@/components/elements/modals';

const ExploreContent = ({
  href,
  text,
  description,
}: {
  href: string;
  text: string;
  description: string;
}) => {
  return (
    <Link href={href}>
      <Box
        p={8}
        borderRadius={'0.5rem'}
        _hover={{
          bg: '#FAFAFA',
        }}
      >
        <Heading as='h3' fontSize={'0.875rem'} color={'colors.secondary'}>
          {text}
        </Heading>
        <Text
          fontSize={'0.75rem'}
          color={'colors.tertiary'}
          mt={4}
          letterSpacing={'0.02rem'}
        >
          {description}
        </Text>
      </Box>
    </Link>
  );
};

export const Header = () => {
  const [position, setPosition] = useState<number>(0);
  const [isOpenLogIn, setIsOpenLogIn] = useState<boolean>(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false);
  const breakPosition = 50;
  const handleOpenLogin = () => {
    setIsOpenLogIn(true);
    setIsOpenSignUp(false);
  };
  const handleOpenSignup = () => {
    setIsOpenLogIn(false);
    setIsOpenSignUp(true);
  };
  const handleClose = () => {
    setIsOpenLogIn(false);
    setIsOpenSignUp(false);
  };
  const handleToggle = () => {
    setIsOpenLogIn((prevIsOpenLogin) => !prevIsOpenLogin);
    setIsOpenSignUp((prevIsOpenLogin) => !prevIsOpenLogin);
  };
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
    <>
      <Box
        as='header'
        position={'fixed'}
        top={24}
        width={'100%'}
        px={30}
        zIndex={100}
      >
        <Box
          as='nav'
          p={8}
          mx={'auto'}
          maxWidth={'fit-content'}
          borderRadius={'1.5rem'}
          transition={'all 0.4s'}
          _hover={{
            bg: 'white',
            boxShadow:
              '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
          }}
          className={
            position > breakPosition || undefined
              ? css`
                  background: white;
                  box-shadow:
                    0px 1px 2px -1px rgba(41, 44, 49, 0.06),
                    0px 0px 0px 1px rgba(15, 16, 18, 0.06),
                    0px 2px 4px 0px rgba(73, 79, 90, 0.04);
                `
              : css`
                  background: t('colors.bgPrimary');
                `
          }
        >
          <NavigationMenu.Root
            className={css`
              position: relative;
            `}
          >
            <NavigationMenu.List
              className={css`
                display: flex;
                gap: 4px;
                align-items: center;
              `}
            >
              <NavigationMenu.Item>
                <Link href='/'>
                  <HeaderNavButton text='Home' />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger asChild>
                  <div>
                    <HeaderNavButton text='Explore' withContent />
                  </div>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                  className={clsx(
                    'content',
                    css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      animation-duration: 250ms;
                      animation-timing-function: ease;
                      padding: 8px;
                    `,
                  )}
                >
                  <Grid gridTemplateColumns={'repeat(2, 1fr)'} gap={4}>
                    <VStack>
                      <ExploreContent
                        href='/works'
                        text='Works'
                        description='作品を探す'
                      />
                      <ExploreContent
                        href='/directory/categories'
                        text='Categories'
                        description='カテゴリーから作品を探す'
                      />
                      <ExploreContent
                        href='/directory/tags'
                        text='Tags'
                        description='タグから作品を探す'
                      />
                    </VStack>
                    <VStack>
                      <ExploreContent
                        href='/creators'
                        text='Creators'
                        description='クリエイターを探す'
                      />
                      <ExploreContent
                        href='/directory/skills'
                        text='Skills'
                        description='スキルからクリエイターを探す'
                      />
                    </VStack>
                  </Grid>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href='/contact'>
                  <HeaderNavButton text='Contact' />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item
                className={css`
                  border-left: 1px solid #eaeaea;
                  padding-left: 12px;
                  margin-left: 12px;
                `}
              >
                <HeaderNavButton text='Log in' onClick={handleOpenLogin} />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Button
                  fontSize={'0.8125rem'}
                  color={'white'}
                  px={16}
                  py={8}
                  bg={'colors.primary'}
                  borderRadius={'1.5rem'}
                  onClick={handleOpenSignup}
                  _hover={{
                    opacity: 0.85,
                  }}
                >
                  Sign up
                </Button>
              </NavigationMenu.Item>
              <NavigationMenu.Item
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
              </NavigationMenu.Item>

              <NavigationMenu.Indicator
                className={clsx(
                  'indicator',
                  css`
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    height: 10px;
                    top: 120%;
                    overflow: hidden;
                    z-index: 1;
                    transition:
                      width,
                      transform 250ms ease;
                  `,
                )}
              >
                <Box
                  className={css`
                    position: relative;
                    top: 70%;
                    background-color: white;
                    width: 10px;
                    height: 10px;
                    transform: rotate(45deg);
                    border-top-left-radius: 2px;
                  `}
                />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <Box
              className={css`
                position: absolute;
                display: flex;
                justify-content: center;
                width: 100%;
                top: 120%;
                left: 0;
                perspective: 2000px;
              `}
            >
              <NavigationMenu.Viewport
                className={clsx(
                  'viewport',
                  css`
                    position: relative;
                    transform-origin: top center;
                    margin-top: 10px;
                    width: 100%;
                    background-color: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow:
                      hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
                      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
                    height: var(--radix-navigation-menu-viewport-height);
                    transition:
                      width,
                      height,
                      300ms ease;
                  `,
                )}
              />
            </Box>
          </NavigationMenu.Root>
        </Box>
      </Box>

      <LogInModal
        isOpen={isOpenLogIn}
        handleClose={handleClose}
        handleToggle={handleToggle}
      />
      <SignUpModal
        isOpen={isOpenSignUp}
        handleClose={handleClose}
        handleToggle={handleToggle}
      />
    </>
  );
};
