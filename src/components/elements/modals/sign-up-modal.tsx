'use client';

import { Box, HStack, Heading, Text, VStack, css } from '@kuma-ui/core';
import Modal from '@mui/material/Modal';
import { User, Work, WorkHistory, WorkImage } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LogInForm } from './log-in-form';
import { Merge } from '@/types/merge';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const SignUpModal = ({ isOpen, handleClose }: Props) => {
  const [workImage, setWorkImage] =
    useState<
      Merge<
        WorkImage,
        { work: Merge<Work, { createdBy: User; histories: WorkHistory[] }> }
      >
    >();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/random-work-image`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setWorkImage(undefined);

          return;
        }
      })
      .then((data) => setWorkImage(data));
  }, [isOpen]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <HStack
        width={'80%'}
        maxWidth={1024}
        gap={32}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        bg={'white'}
        boxShadow={
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)'
        }
        borderRadius={'1rem'}
        p={24}
      >
        <Box
          position={'relative'}
          width={'50%'}
          height={'auto'}
          borderRadius={'0.875rem'}
          overflow={'hidden'}
        >
          {workImage ? (
            <>
              <Image
                src={workImage.url}
                alt={''}
                fill
                sizes='100%'
                className={css`
                  object-fit: cover;
                `}
              />
              <Box
                position={'absolute'}
                inset={0}
                bg={
                  'linear-gradient(180deg, rgba(43, 43, 43, 0.00) 0%, #2B2B2B 100%);'
                }
              />
              {workImage.work.createdBy && (
                <VStack
                  gap={4}
                  position={'absolute'}
                  bottom={16}
                  right={16}
                  alignItems={'flex-end'}
                >
                  <Text color={'colors.tertiary'} fontSize={'0.8125rem'}>
                    <Link
                      href={`/works/${workImage.work.id}`}
                      onClick={handleClose}
                      className={css`
                        &:hover {
                          text-decoration: underline;
                        }
                      `}
                    >
                      {workImage.work.histories[0].title}
                    </Link>
                  </Text>
                  <Text color={'colors.tertiary'} fontSize={'0.75rem'}>
                    created by{' '}
                    <Link
                      href={`/creators/${workImage.work.createdBy.id}`}
                      onClick={handleClose}
                      className={css`
                        &:hover {
                          text-decoration: underline;
                        }
                      `}
                    >
                      {workImage.work.createdBy.name}
                    </Link>
                  </Text>
                </VStack>
              )}
            </>
          ) : (
            <Box
              width={'100%'}
              height={'auto'}
              position={'absolute'}
              inset={0}
              bg={'whitesmoke'}
            />
          )}
        </Box>
        <Box width={'50%'} py={24}>
          <Heading as='h1' fontWeight={700} fontSize={'1.5rem'}>
            Log in
          </Heading>
          <LogInForm />
          <Text mt={36} color={'colors.tertiary'} fontSize={'0.875rem'}>
            会員登録がまだの方はこちらから登録してください
          </Text>
        </Box>
      </HStack>
    </Modal>
  );
};
