'use client';

import { Box, Heading } from '@kuma-ui/core';
import Modal from '@mui/material/Modal';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const SignUpModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
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
        <Heading as='h1'>ようこそVirtualCreditへ！</Heading>
        <Heading as='h2' fontWeight={700} fontSize={'1.25rem'}>
          メールアドレスで登録する
        </Heading>
      </Box>
    </Modal>
  );
};
