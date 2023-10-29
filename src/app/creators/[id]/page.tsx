import { Spacer } from '@kuma-ui/core';
import { redirect } from 'next/navigation';
import { Summary, WorkList } from './_components';
import prisma from '@/lib/prisma';

type Props = {
  id: string;
};

export default async function Page({ params }: { params: Props }) {
  const creator = await prisma.user.findUnique({
    where: {
      id: params.id,
      published: true,
    },
  });

  if (!creator) {
    redirect('/creators');
  }

  return (
    <>
      <Summary creator={creator} />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <WorkList creator={creator} />
    </>
  );
}
