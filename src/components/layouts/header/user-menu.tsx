'use client'

import '@/styles/radix/dropdown-menu.css'
import '@/styles/radix/navigation-menu.css'

import { Box, Button, css } from '@kuma-ui/core'
import { CircularProgress } from '@mui/material'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

import { LogInModal } from '@/components/common/log-in-modal'
import { SignUpModal } from '@/components/common/sign-up-modal'
import { HeaderNavButton } from '@/components/elements/buttons'
import { AnonymousUserIcon } from '@/components/elements/icons'
import { SignOutModal } from './sign-out-modal'
import { DropdownMenuContents } from './user-menu-contents'

export const UserMenu = () => {
  const { status, data: session } = useSession()
  const [isOpenLogIn, setIsOpenLogIn] = useState<boolean>(false)
  const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false)
  const handleOpenLogin = () => {
    setIsOpenLogIn(true)
    setIsOpenSignUp(false)
  }
  const handleOpenSignUp = () => {
    setIsOpenLogIn(false)
    setIsOpenSignUp(true)
  }
  const handleClose = () => {
    setIsOpenLogIn(false)
    setIsOpenSignUp(false)
  }
  const handleToggle = () => {
    setIsOpenLogIn((prevIsOpenLogin) => !prevIsOpenLogin)
    setIsOpenSignUp((prevIsOpenLogin) => !prevIsOpenLogin)
  }

  if (status === 'loading') {
    return (
      <NavigationMenu.Item
        className={css`
          border-left: 1px solid #eaeaea;
          padding-left: 12px;
          margin-left: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <CircularProgress size={20} />
      </NavigationMenu.Item>
    )
  }

  return (
    <>
      {session ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <NavigationMenu.Item
              className={css`
                border-left: 1px solid #eaeaea;
                padding-left: 12px;
                margin-left: 12px;
              `}
            >
              <Box
                position={'relative'}
                width={32}
                height={32}
                borderRadius={9999}
                border={'1px solid #eaeaea'}
                overflow={'hidden'}
                bg={'colors.bgPrimary'}
                p={8}
                cursor={'pointer'}
                _hover={{
                  opacity: 0.85,
                }}
              >
                {session.user?.image ? (
                  <Image
                    src={session.user?.image}
                    alt={'ユーザーメニューアイコン'}
                    fill={true}
                    sizes='100%'
                    className={css`
                      object-fit: cover;
                    `}
                  />
                ) : (
                  <AnonymousUserIcon
                    className={css`
                      width: 100%;
                      height: 100%;
                      background: white;
                      fill: t('colors.secondary');
                    `}
                  />
                )}
              </Box>
            </NavigationMenu.Item>
          </DropdownMenu.Trigger>

          <AlertDialog.Root>
            <DropdownMenuContents />

            <SignOutModal />
          </AlertDialog.Root>
        </DropdownMenu.Root>
      ) : (
        <>
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
              onClick={handleOpenSignUp}
              _hover={{
                opacity: 0.85,
              }}
            >
              Sign up
            </Button>
          </NavigationMenu.Item>

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
      )}
    </>
  )
}
