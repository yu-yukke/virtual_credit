import { Box, Grid, Heading, Text, css } from '@kuma-ui/core';
import { User } from '@prisma/client';
import Image from 'next/image';

import { Skills } from './skills';
import { Social } from './social';
import { AnonymousUserIcon } from '@/components/elements/icons';

type Props = {
  creator: User;
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

export const Summary = async ({ creator }: Props) => {
  return (
    <Box as='section' mt={86}>
      <Skills creator={creator} />
      <Grid
        py={64}
        className={css`
          grid-template-columns: 1fr min(400px, 100%) 1fr;
        `}
      >
        <Box
          width={144}
          height={144}
          position={'relative'}
          borderRadius={9999}
          overflow={'hidden'}
          mx={'auto'}
        >
          {creator.image ? (
            <Image
              src={creator.image}
              alt={`${creator.name}のサムネイル画像`}
              fill
            />
          ) : (
            RenderAnonymousUserIcon()
          )}
        </Box>
        <Heading
          as='h1'
          mt={16}
          textAlign={'center'}
          fontSize={'2.25rem'}
          fontWeight={700}
          letterSpacing={'0.0675rem'}
          className={css`
            background: linear-gradient(
              90deg,
              rgba(45, 45, 46, 0.45) -106.51%,
              #2d2d2e 210.59%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          {creator.name}
        </Heading>
        <Text
          mt={48}
          color={'colors.secondary'}
          letterSpacing={'0.03rem'}
          whiteSpace={'pre-wrap'}
          lineHeight={1.625}
        >
          {creator.description}
        </Text>
        <Social creator={creator} />
      </Grid>
    </Box>
  );
};
