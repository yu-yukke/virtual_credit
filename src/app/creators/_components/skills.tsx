import { HStack } from '@kuma-ui/core';

import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

export const Skills = async () => {
  const skills = await prisma.skill.findMany();

  return (
    <HStack as='ul' gap={4} py={12} px={1} overflow={'scroll hidden'}>
      {skills.map((skill) => (
        <li key={skill.id}>
          <FilterButton text={skill.name} />
        </li>
      ))}
    </HStack>
  );
};
