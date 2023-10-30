import { HStack } from '@kuma-ui/core';

import Link from 'next/link';
import { FilterButton } from '@/components/elements/buttons';

import prisma from '@/lib/prisma';

type Props = {
  skillName?: string;
};

export const Skills = async ({ skillName }: Props) => {
  const skills = await prisma.skill.findMany();

  if (!skills.length) {
    return null;
  }

  return (
    <HStack as='ul' gap={4} py={12} px={1} overflow={'scroll hidden'}>
      {skills.map((skill) => (
        <li key={skill.id}>
          <Link href={`/searches/creators/${skill.name}`}>
            <FilterButton
              text={skill.name}
              isActive={encodeURI(skill.name) === skillName}
            />
          </Link>
        </li>
      ))}
    </HStack>
  );
};
