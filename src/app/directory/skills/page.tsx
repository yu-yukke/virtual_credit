import { SkillList } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

export default async function Page() {
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
    <>
      <PageHeadingWrapper
        title='Directory'
        subtitle='Skills'
        description={`Explore creators with ${skills
          .slice(0, 3)
          .map((skill) => skill.name)
          .join(', ')} and more`}
      />
      <SkillList />
    </>
  );
}
