import { NextResponse } from 'next/server';
import { db } from '@/db';
import { tags } from '@/db/schema';

export async function GET() {
  const response = await db.select().from(tags);

  return NextResponse.json(response);
}
