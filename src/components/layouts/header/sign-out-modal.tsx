import '@/styles/radix/alert-dialog.css'

import { Button, HStack, Heading, Text, css } from '@kuma-ui/core'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'

export const SignOutModal = () => {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        className={clsx(
          'overlay',
          css`
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100;
          `,
        )}
      />
      <AlertDialog.Content
        className={clsx(
          'content',
          css`
            background: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90vw;
            max-width: 500px;
            max-height: 85vh;
            border-radius: 1rem;
            padding: 24px;
            box-shadow: '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)';
            z-index: 100;
          `,
        )}
      >
        <AlertDialog.Title asChild={true}>
          <Heading as='h1' fontWeight={500} fontSize={'1.25rem'}>
            ログアウトしますか？
          </Heading>
        </AlertDialog.Title>
        <AlertDialog.Description asChild={true}>
          <Text
            mt={12}
            fontSize={'0.8125rem'}
            color={'colors.tertiary'}
            lineHeight={1.625}
            letterSpacing={'0.04rem'}
            className={css`
              word-break: auto-phrase;
            `}
          >
            ログアウト中は作品へのいいね機能やクリエイターの紐づけ機能などの、一部機能が制限されます。
          </Text>
        </AlertDialog.Description>
        <HStack mt={24} justifyContent={'flex-end'} gap={16}>
          <AlertDialog.Cancel asChild={true}>
            <Button
              color={'colors.secondary'}
              fontSize={'0.875rem'}
              letterSpacing={'0.02625rem'}
              px={12}
              py={8}
              borderRadius={'0.5rem'}
              bg={'colors.bgSecondary'}
              _hover={{
                opacity: 0.85,
              }}
            >
              キャンセル
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild={true}>
            <Button
              color={'colors.alert'}
              fontSize={'0.875rem'}
              letterSpacing={'0.02625rem'}
              px={12}
              py={8}
              borderRadius={'0.5rem'}
              bg={'colors.bgAlert'}
              _hover={{
                opacity: 0.85,
              }}
              onClick={() => signOut()}
            >
              ログアウト
            </Button>
          </AlertDialog.Action>
        </HStack>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
