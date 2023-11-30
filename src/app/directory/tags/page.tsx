import { TagList } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

export default async function Page() {
  const allTags = await prisma.tag.findMany({
    include: {
      workTags: {
        include: {
          work: {
            include: {
              histories: {
                orderBy: {
                  createdAt: 'desc',
                },
              },
            },
          },
        },
        where: {
          work: {
            published: true,
          },
        },
      },
    },
  });
  const tags = allTags.filter((tag) =>
    tag.workTags.some(
      (workTag) => workTag.work.published && workTag.work.histories.length > 0,
    ),
  );
  tags.sort((a, b) => {
    const aCount = a.workTags.filter(
      (workTag) => workTag.work.published,
    ).length;
    const bCount = b.workTags.filter(
      (workTag) => workTag.work.published,
    ).length;
    return bCount - aCount;
  });

  return (
    <>
      <PageHeadingWrapper
        title='Directory'
        subtitle='Tags'
        description={`Explore works with ${tags
          .slice(0, 3)
          .map((tag) => `# ${tag.name}`)
          .join(', ')} and more`}
      />
      <TagList />
    </>
  );
}
