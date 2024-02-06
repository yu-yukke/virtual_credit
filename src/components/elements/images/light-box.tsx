'use client'

import 'react-medium-image-zoom/dist/styles.css'

import React from 'react'
import Zoom from 'react-medium-image-zoom'

type Props = {
  children: React.ReactNode
}

export const LightBox = ({ children }: Props) => {
  return <Zoom>{children}</Zoom>
}
