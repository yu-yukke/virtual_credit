import { HStack } from '@kuma-ui/core'

import Link from 'next/link'
import { FilterButton } from '@/components/elements/buttons'

import prisma from '@/lib/prisma'

type Props = {
  skillName?: string
}

export const Skills = async ({ skillName }: Props) => {
  const skills = await prisma.skill.findMany({
    include: {
      userSkills: {
        where: {
          user: {
            published: true,
          },
        },
      },
    },
  })

  return (
    <HStack
      as='ul'
      gap={4}
      py={12}
      px={1}
      overflow={'scroll hidden'}
      maskImage={'linear-gradient(to left, rgba(0, 0, 0, 0.4), white)'}
    >
      {!!skills.length && (
        <>
          <li>
            <Link href={'/creators'}>
              <FilterButton text='All' />
            </Link>
          </li>
          {skills.map(
            (skill) =>
              skill.userSkills.length > 0 && (
                <li key={skill.id}>
                  <Link href={`/searches/skills/${skill.name}`}>
                    <FilterButton
                      text={`${skill.name} (${skill.userSkills.length})`}
                      isActive={encodeURI(skill.name) === skillName}
                    />
                  </Link>
                </li>
              ),
          )}
        </>
      )}
    </HStack>
  )
}
