'use client';

import { Button, Text, css } from '@kuma-ui/core';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

type Props = {
  provider: 'google' | 'twitter' | 'discord';
  isAgreement?: boolean;
};

const toUpperCase = (provider: string) => {
  const firstLetter = provider.substring(0, 1).toUpperCase();
  const otherLetter = provider.substring(1).toLowerCase();

  return `${firstLetter}${otherLetter}`;
};

const switchIcon = (provider: string) => {
  switch (provider) {
    case 'twitter':
      return (
        <TwitterIcon
          fontSize='small'
          className={css`
            fill: #6c6c75 !important;
          `}
        />
      );
    case 'google':
      return (
        <GoogleIcon
          fontSize='small'
          className={css`
            fill: #6c6c75 !important;
          `}
        />
      );
    case 'discord':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path
            fill='#6c6c75'
            d='M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z'
          />
        </svg>
      );
    default:
      return;
  }
};

export const AuthButton = ({ provider, isAgreement }: Props) => {
  const providerText = toUpperCase(provider);
  const [open, setOpen] = useState(false);

  const handleSignIn = () => {
    if (isAgreement) {
      signIn(`${provider}`);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    if (!isAgreement) {
      setOpen(true);
    }
  };

  return (
    <Tooltip
      title='利用規約への同意が必要です'
      placement='top'
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Button
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={8}
        width={'100%'}
        py={12}
        borderRadius={'0.25rem'}
        borderStyle={'solid'}
        borderWidth={1}
        borderColor={'colors.borderPrimary'}
        transition={'all 0.4s'}
        onClick={handleSignIn}
        className={
          isAgreement
            ? css`
                &:hover {
                  background: #fafafa;
                }
              `
            : css`
                cursor: default !important;
                background: #e4e4e4;
                opacity: 0.6;
              `
        }
      >
        {switchIcon(provider)}
        <Text as='span' color={'colors.secondary'}>
          {`${providerText} でログイン`}
        </Text>
      </Button>
    </Tooltip>
  );
};
