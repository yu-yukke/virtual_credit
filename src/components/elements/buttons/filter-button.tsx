import { Button, css } from '@kuma-ui/core';
import { Skeleton } from '@mui/material';

type Props =
  | {
      isLoading: true;
      text?: never;
      isActive?: never;
    }
  | {
      isLoading?: false;
      text: string;
      isActive?: boolean;
    };

export const FilterButton = ({ isLoading, text, isActive }: Props) => {
  return isLoading ? (
    <Skeleton variant='rounded' width={80} height={32} />
  ) : (
    <Button
      px={16}
      py={8}
      fontSize={'0.8125rem'}
      borderRadius={'1.5rem'}
      transition={'all 0.4s'}
      whiteSpace={'nowrap'}
      _hover={{
        color: '#2D2D2E',
        bg: 'white',
        boxShadow:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
      }}
      className={
        isActive
          ? css`
              color: t('colors.primary');
              background: white;
              box-shadow:
                0px 1px 2px -1px rgba(41, 44, 49, 0.06),
                0px 0px 0px 1px rgba(15, 16, 18, 0.06),
                0px 2px 4px 0px rgba(73, 79, 90, 0.04);
            `
          : css`
              color: t('colors.tertiary');
            `
      }
    >
      {text}
    </Button>
  );
};
