import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Work } from '@/types/works';

export async function GET() {
  const worksWithHistories = await prisma.work.findMany({
    include: {
      histories: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      workImages: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      copyrights: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          userCopyrights: {
            include: {
              user: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
          anonymousUserCopyrights: {
            include: {
              anonymousUser: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
    },
  });
  const response = await worksWithHistories.filter(
    (work: Work) => work.histories.length > 0 && work.histories[0].published,
  );

  return NextResponse.json(response);
}
