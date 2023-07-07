import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobs } from '@/db/schema';

export async function GET() {
  const response = await db.select().from(jobs);

  return NextResponse.json(response);
}
