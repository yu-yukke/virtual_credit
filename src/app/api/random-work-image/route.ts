import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const workImageCount = await prisma.workImage.count({
    where: {
      work: {
        published: true,
        createdBy: {
          published: true,
        },
      },
    },
  })
  const workImage = await prisma.workImage.findFirst({
    include: {
      work: {
        include: {
          createdBy: true,
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
        createdBy: {
          published: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
    take: 1,
    skip: Math.floor(Math.random() * (await workImageCount)),
  })

  if (!workImage) {
    return new NextResponse('作品画像が取得出来ませんでした', { status: 404 })
  }

  return NextResponse.json(workImage)
}
