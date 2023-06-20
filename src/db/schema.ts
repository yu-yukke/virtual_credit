import { InferModel, relations } from 'drizzle-orm';
import {
  mysqlTable,
  varchar,
  int,
  index,
  json,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/mysql-core';

// ********** user account ********** //
export const users = mysqlTable(
  'users',
  {
    id: int('id').autoincrement().primaryKey(),
    externalId: varchar('external_id', { length: 255 }).notNull(),
    attributes: json('attributes').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    externalIdIndex: uniqueIndex('externalId_idx').on(table.externalId),
  }),
);

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;

export const usersRelations = relations(users, ({ one }) => ({
  social: one(socials, {
    fields: [users.id],
    references: [socials.userId],
  }),
}));

// ********** social account ids ********** //
export const socials = mysqlTable(
  'socials',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    twitterId: varchar('twitter_id', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIndex: index('userId_idx').on(table.userId),
  }),
);

export type Social = InferModel<typeof socials>;
export type NewSocial = InferModel<typeof socials, 'insert'>;
