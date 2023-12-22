import { Box, Text } from '@kuma-ui/core'

import { PageHeadingButton } from '@/components/elements/buttons'

type Props = {
  title: string
  subtitle?: string
  description: string
}

export const PageHeadingWrapper = ({ title, subtitle, description }: Props) => {
  return (
    <Box
      as='section'
      pt={88}
      pb={112}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <PageHeadingButton title={title} />
      {subtitle && (
        <Text mt={24} fontSize={'1.375rem'} letterSpacing={'0.04rem'}>
          {subtitle}
        </Text>
      )}
      <Text
        mt={subtitle ? 12 : 24}
        fontSize={'1rem'}
        color={subtitle ? 'colors.tertiary' : 'colors.primary'}
      >
        {description}
      </Text>
    </Box>
  )
}
