'use client';

import { Button, Spacer, Text, VStack } from '@kuma-ui/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import { AuthButtons } from './auth-buttons';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <VStack py={48} gap={24}>
        <TextField
          required
          id='outlined-basic'
          label='メールアドレス'
          variant='outlined'
        />
        <FormControl fullWidth variant='outlined'>
          <InputLabel required htmlFor='outlined-adornment-password'>
            パスワード
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        <FormControl fullWidth variant='outlined'>
          <InputLabel
            required
            htmlFor='outlined-adornment-password-confirmation'
          >
            パスワード確認
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password-confirmation'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        <Button
          color={'white'}
          bg={'colors.primary'}
          py={16}
          textAlign={'center'}
          borderRadius={'0.25rem'}
          _hover={{ opacity: 0.85 }}
        >
          アカウント登録
        </Button>
      </VStack>
      <Spacer size={1} bg={'colors.borderPrimary'} />
      <Text color={'colors.tertiary'} mt={24} fontSize={'0.875rem'}>
        or Sign up with
      </Text>
      <AuthButtons />
    </>
  );
};
