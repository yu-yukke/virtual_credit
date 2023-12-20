'use client';

import { Box, HStack, Heading, Text, VStack, css } from '@kuma-ui/core';
import { Checkbox, FormControlLabel } from '@mui/material';
import Modal from '@mui/material/Modal';
import { User, Work, WorkHistory, WorkImage } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AuthButtons } from '@/components/elements/buttons/auth';
import { Merge } from '@/types/merge';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleToggle: () => void;
};

export const SignUpModal = ({ isOpen, handleClose, handleToggle }: Props) => {
  const [isCheckPolicy, setIsCheckPolicy] = useState<boolean>(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState<boolean>(true);
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
  }, []);

  const handleChangePolicy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckPolicy(event.target.checked);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedEmail(event.target.checked);
  };

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
            Sign up
          </Heading>
          <Box mt={24}>
            <Text
              fontSize={'0.75rem'}
              color={'colors.tertiary'}
              lineHeight={1.625}
              letterSpacing={'0.025rem'}
              className={css`
                word-break: auto-phrase;
              `}
            >
              利用規約へ同意の上、希望のソーシャルアカウントから会員登録してください。
            </Text>
            <Text
              mt={4}
              fontSize={'0.75rem'}
              color={'colors.tertiary'}
              lineHeight={1.625}
              letterSpacing={'0.025rem'}
              className={css`
                word-break: auto-phrase;
              `}
            >
              また、取得されたメールアドレスへパーソナライズされた情報を送信する可能性がございます。
            </Text>
            <VStack mt={24}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheckPolicy}
                    onChange={handleChangePolicy}
                    inputProps={{ 'aria-label': 'controlled' }}
                    size='small'
                    color='default'
                  />
                }
                label={
                  <Text
                    as='span'
                    fontSize={'0.75rem'}
                    color={'colors.tertiary'}
                  >
                    利用規約へ同意する
                  </Text>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheckedEmail}
                    onChange={handleChangeEmail}
                    inputProps={{ 'aria-label': 'controlled' }}
                    size='small'
                    color='default'
                  />
                }
                label={
                  <Text
                    as='span'
                    fontSize={'0.75rem'}
                    color={'colors.tertiary'}
                  >
                    メール送信を希望する（後からでも変更可能です）
                  </Text>
                }
              />
            </VStack>
          </Box>

          <AuthButtons isAgreement={isCheckPolicy} />

          <Text mt={36} color={'colors.tertiary'} fontSize={'0.875rem'}>
            既に会員の方は
            <Text
              as='span'
              cursor={'pointer'}
              textDecoration={'underline'}
              onClick={handleToggle}
            >
              こちら
            </Text>
            からログインしてください
          </Text>
        </Box>
      </HStack>
    </Modal>
  );
};
