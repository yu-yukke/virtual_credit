import '@/styles/radix/navigation-menu.css'

import { Button, HStack } from '@kuma-ui/core'
import { CaretDownIcon } from '@radix-ui/react-icons'
import React from 'react'

type Props = {
  text: string
  withContent?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const HeaderNavButton = ({ text, withContent, onClick }: Props) => {
  return (
    <Button
      px={16}
      py={8}
      fontSize={'0.8125rem'}
      color={'colors.secondary'}
      borderRadius={'1.5rem'}
      transition={'all 0.4s'}
      onClick={onClick}
      _hover={{
        bg: '#FAFAFA',
        boxShadow:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
      }}
    >
      <HStack alignItems={'flex-start'} gap={4}>
        {text}
        {withContent && <CaretDownIcon className='caretDown' />}
      </HStack>
    </Button>
  )
}
