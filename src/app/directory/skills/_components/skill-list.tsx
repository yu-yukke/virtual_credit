import { Box, HStack, Text, VStack } from '@kuma-ui/core';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export const SkillList = async () => {
  const skills = await prisma.skill.findMany({
    include: {
      userSkills: {
        include: {
          user: true,
        },
        where: {
          user: {
            published: true,
          },
        },
      },
    },
  });
  skills.sort((a, b) => {
    const aCount = a.userSkills.filter(
      (userSkill) => userSkill.user.published,
    ).length;
    const bCount = b.userSkills.filter(
      (userSkill) => userSkill.user.published,
    ).length;
    return bCount - aCount;
  });

  return (
    <VStack as='ul' gap={12} alignItems={'center'} className='full-bleed'>
      {skills.map((skill) => (
        <Box
          as='li'
          key={skill.id}
          color={'colors.secondary'}
          _hover={{ color: '#2D2D2E' }}
        >
          <Link href={`/searches/skills/${skill.name}`}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              width={400}
              mx={'auto'}
            >
              <Text>{skill.name}</Text>
              <Text>
                {
                  skill.userSkills.filter(
                    (userSkill) => userSkill.user.published,
                  ).length
                }
              </Text>
            </HStack>
          </Link>
        </Box>
      ))}
    </VStack>
  );
};
