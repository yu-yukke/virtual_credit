import { Button, Grid, HStack, css } from '@kuma-ui/core'
import { User } from '@prisma/client'
import Link from 'next/link'
import prisma from '@/lib/prisma'

type Props = {
  creator: User
}

export const Skills = async ({ creator }: Props) => {
  const userSkills = await prisma.userSkill.findMany({
    where: {
      userId: creator.id,
    },
    include: {
      skill: true,
    },
  })
  const skills = [...new Set(userSkills.map((userSkill) => userSkill.skill))]

  return (
    <Grid
      className={css`
        grid-template-columns: 1fr min(816px, 100%) 1fr;
      `}
    >
      <HStack as='ul' flexWrap={'wrap'} justifyContent={'center'} gap={24}>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link href={`/searches/skills/${skill.name}`}>
              <Button
                px={16}
                py={8}
                color={'colors.tertiary'}
                fontSize={'0.8125rem'}
                borderRadius={'1.5rem'}
                transition={'all 0.4s'}
                whiteSpace={'nowrap'}
                bg={'white'}
                boxShadow={
                  '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)'
                }
                _hover={{
                  color: '#2D2D2E',
                  bg: 'white',
                  boxShadow:
                    '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
                }}
              >
                {skill.name}
              </Button>
            </Link>
          </li>
        ))}
      </HStack>
    </Grid>
  )
}
