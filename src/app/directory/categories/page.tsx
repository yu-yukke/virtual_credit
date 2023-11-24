import { CategoryList } from './_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';
import prisma from '@/lib/prisma';

export default async function Page() {
  const allCategories = await prisma.category.findMany({
    include: {
      workCategories: {
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
      },
    },
  });
  const categories = allCategories.filter((category) =>
    category.workCategories.some(
      (workCategory) =>
        workCategory.work.published && workCategory.work.histories.length > 0,
    ),
  );

  return (
    <>
      <PageHeadingWrapper
        title='Directory'
        subtitle='Categories'
        description={`Explore works with ${categories
          .slice(0, 3)
          .map((category) => category.name)
          .join(', ')} and more`}
      />
      <CategoryList />
    </>
  );
}
