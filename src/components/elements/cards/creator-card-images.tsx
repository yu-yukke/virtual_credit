import { Box, HStack, css } from '@kuma-ui/core';
import { User, WorkImage } from '@prisma/client';
import clsx from 'clsx';
import Image from 'next/image';
import { AnonymousUserIcon } from '../icons';

type Props = {
  creator: User;
  workImages: WorkImage[];
  isHover: boolean;
};

const RenderAnonymousUserIcon = () => {
  return (
    <AnonymousUserIcon
      className={css`
        width: 100%;
        height: 100%;
        background: white;
        fill: t('colors.tertiary');
      `}
    />
  );
};

export const CreatorCardImages = ({ creator, workImages, isHover }: Props) => {
  return (
    <Box position={'relative'} mb={48}>
      {workImages.length === 0 && (
        <Box
          position={'relative'}
          width={'100%'}
          height={'auto'}
          borderRadius={'0.875rem'}
          overflow={'hidden'}
          className={css`
            aspect-ratio: 16 / 7;
          `}
        >
          <Box
            width={'100%'}
            height={'auto'}
            position={'absolute'}
            inset={0}
            bg={'whitesmoke'}
          />
        </Box>
      )}
      {workImages.length === 1 && (
        <Box
          position={'relative'}
          width={'100%'}
          height={'auto'}
          borderRadius={'0.875rem'}
          overflow={'hidden'}
          className={css`
            aspect-ratio: 16 / 7;
          `}
        >
          <Image
            src={workImages[0].url}
            alt=''
            fill
            sizes='100%'
            className={clsx(
              css`
                width: 100%;
                height: auto;
                transition: all 0.4s;
                object-fit: cover;
              `,
              isHover
                ? css`
                    filter: blur(0px) grayscale(0);
                  `
                : css`
                    filter: blur(2px) grayscale(70%);
                  `,
            )}
          />
        </Box>
      )}
      {workImages.length > 1 && (
        <HStack
          width={'100%'}
          height={'auto'}
          gap={16}
          className={css`
            aspect-ratio: 16 / 7;
          `}
        >
          {workImages.slice(0, 2).map((workImage) => (
            <Box
              key={workImage.id}
              position={'relative'}
              width={'100%'}
              height={'auto'}
              borderRadius={'0.875rem'}
              overflow={'hidden'}
            >
              <Image
                src={workImage.url}
                alt=''
                fill
                sizes='100%'
                className={clsx(
                  css`
                    width: 100%;
                    height: auto;
                    transition: all 0.4s;
                    object-fit: cover;
                  `,
                  isHover
                    ? css`
                        filter: blur(0px) grayscale(0);
                      `
                    : css`
                        filter: blur(2px) grayscale(70%);
                      `,
                )}
              />
            </Box>
          ))}
        </HStack>
      )}
      <Box
        position={'absolute'}
        bottom={0}
        left={'50%'}
        transform={'translate(-50%, 40%)'}
      >
        <Box
          width={124}
          height={124}
          position={'relative'}
          borderRadius={9999}
          overflow={'hidden'}
          border={'2px solid white'}
        >
          {creator.image ? (
            <Image
              src={creator.image}
              alt=''
              fill
              className={clsx(
                css`
                  transition: all 0.4s;
                `,
                isHover &&
                  css`
                    transform: scale(1.1);
                  `,
              )}
            />
          ) : (
            RenderAnonymousUserIcon()
          )}
        </Box>
      </Box>
    </Box>
  );
};
