import { NextResponse } from 'next/server';
import { db } from '@/db';

export async function GET() {
  const response = await db.query.works.findMany({
    with: {
      workImages: {
        orderBy: (work_images, { desc }) => [desc(work_images.isMain)],
        limit: 5,
      },
    },
  });

  return NextResponse.json(response);
}
