import { NextResponse } from 'next/server';
import { db } from '@/db';

export async function GET() {
  // TODO: publicユーザーのみにする
  const response = await db.query.users.findMany({
    with: {
      jobMappings: {
        with: {
          job: true,
        },
      },
    },
  });

  return NextResponse.json(response);
}
