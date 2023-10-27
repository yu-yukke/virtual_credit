import { Box, Heading, Text, css } from '@kuma-ui/core';
import { Skill, User, UserSkill } from '@prisma/client';

import { Merge } from '@/types/merge';

type Props = {
  creator: User;
  userSkills: Merge<UserSkill, { skill: Skill }>[];
};

export const CreatorCardSummary = ({ creator, userSkills }: Props) => {
  return (
    <>
      <Box px={24}>
        <Heading
          as='h2'
          textAlign={'center'}
          fontSize={'1.125rem'}
          fontWeight={500}
          letterSpacing={'0.0375rem'}
          lineHeight={1.65}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          className={css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          `}
        >
          {creator.name}
        </Heading>
        <Text
          as='p'
          mt={8}
          fontSize={'0.75rem'}
          color={'colors.tertiary'}
          letterSpacing={'0.0225rem'}
          textAlign={'center'}
          lineHeight={1.5}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          className={css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          `}
        >
          {userSkills.map((userSkill) => userSkill.skill.name).join(', ')}
        </Text>
      </Box>
      <Text
        as='p'
        px={24}
        textAlign={'center'}
        color={'colors.secondary'}
        fontSize={'0.75rem'}
        lineHeight={1.625}
        letterSpacing={'0.0225rem'}
        whiteSpace={'pre-wrap'}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
        className={css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        `}
      >
        {creator.description}
      </Text>
    </>
  );
};
