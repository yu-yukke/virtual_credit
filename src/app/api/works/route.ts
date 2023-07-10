import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { work_images } from '@/db/schema';

export async function GET() {
  const response = await db.query.works.findMany({
    with: {
      category: true,
      workImages: {
        where: eq(work_images.isMain, true),
        limit: 1,
      },
    },
  });

  return NextResponse.json(response);
}
