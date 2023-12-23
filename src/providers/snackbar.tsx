'use client'

import React, { createContext, useContext, useState } from 'react'

type SnackbarContextType = {
  snackbar: {
    type: 'error' | 'warning' | 'info' | 'success'
    description: string
    open: boolean
  }
  openSnackbar: (
    type: 'error' | 'warning' | 'info' | 'success',
    description: string,
  ) => void
  closeSnackbar: () => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
)

export const SnackbarProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [snackbar, setSnackbar] = useState({
    type: 'success' as 'error' | 'warning' | 'info' | 'success',
    description: '',
    open: false,
  })

  const openSnackbar = (
    type: 'error' | 'warning' | 'info' | 'success',
    description: string,
  ) => {
    setSnackbar({ type, description, open: true })
  }

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <SnackbarContext.Provider value={{ snackbar, openSnackbar, closeSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)

  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }

  return context
}
