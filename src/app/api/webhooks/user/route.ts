import { IncomingHttpHeaders } from 'http';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook, WebhookRequiredHeaders } from 'svix';
import { db } from '@/db';
import { NewUser, users } from '@/db/schema';

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';
type Event = {
  data: Record<string, string | number>;
  object: 'event';
  type: EventType;
};

async function handler(request: Request) {
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

    if (eventType === 'user.created') {
      const newUser: NewUser = {
        externalId: id as string,
        attributes: attributes,
      };

      await db.insert(users).values(newUser);
    } else if (eventType === 'user.updated') {
      await db
        .update(users)
        .set({ attributes: attributes })
        .where(eq(users.externalId, id as string));
    }

    return NextResponse.json({}, { status: 200 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
