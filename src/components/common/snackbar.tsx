'use client'

import '@/styles/radix/toast.css'

import * as Toast from '@radix-ui/react-toast'

import { useSnackbar } from '@/providers/snackbar'

export const Snackbar = () => {
  const { snackbar, closeSnackbar } = useSnackbar()

  return snackbar.open ? (
    <Toast.Provider>
      <Toast.Root className='ToastRoot'>
        <Toast.Title className='ToastTitle'>{snackbar.type}</Toast.Title>
        <Toast.Description className='ToastDescription'>
          {snackbar.description}
        </Toast.Description>
        <Toast.Close aria-label='Close' onClick={closeSnackbar}>
          <span aria-hidden>×</span>
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className='ToastViewport' />
    </Toast.Provider>
  ) : null
}
