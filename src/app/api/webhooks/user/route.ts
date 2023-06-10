import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';
import prisma from '@/lib/prisma';

const webhookSecret = process.env.WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';
type Event = {
  data: Record<string, string | number>;
  object: 'event';
  type: EventType;
};

async function handler(request: Request) {
  console.log('ok');
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature'),
  };
  const webhook = new Webhook(webhookSecret);
  let event: Event | null = null;

  try {
    event = webhook.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (error) {
    console.error((error as Error).message);

    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = event.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, ...attributes } = event.data;

    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: { attributes },
    });

    return NextResponse.json({}, { status: 200 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
