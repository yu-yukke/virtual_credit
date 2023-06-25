import { InferModel, relations } from 'drizzle-orm';
import {
  mysqlTable,
  varchar,
  int,
  index,
  json,
  timestamp,
  uniqueIndex,
  text,
  boolean,
} from 'drizzle-orm/mysql-core';

// ********** assets start ********** //

export const assets = mysqlTable('assets', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  url: varchar('url', { length: 256 }).notNull(),
  imageUrl: varchar('image_url', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type Asset = InferModel<typeof assets>;
export type NewAsset = InferModel<typeof assets, 'insert'>;

export const assetsRelations = relations(assets, ({ many }) => ({
  assetMappings: many(asset_mappings),
}));

// ********** assets end ********** //

// ********** asset mappings start ********** //

export const asset_mappings = mysqlTable(
  'asset_mappings',
  {
    id: int('id').autoincrement().primaryKey(),
    workId: int('work_id').notNull(),
    assetId: int('tag_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    workIdIndex: index('workId_idx').on(table.workId),
    assetIdIndex: index('assetId_idx').on(table.assetId),
  }),
);

export type AssetMapping = InferModel<typeof asset_mappings>;
export type NewAssetMapping = InferModel<typeof asset_mappings, 'insert'>;

export const assetMappingsRelations = relations(asset_mappings, ({ one }) => ({
  asset: one(assets, {
    fields: [asset_mappings.assetId],
    references: [assets.id],
  }),
  work: one(works, {
    fields: [asset_mappings.workId],
    references: [works.id],
  }),
}));

// ********** asset mappings end ********** //

// ********** categories start ********** //

export const categories = mysqlTable('categories', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type Category = InferModel<typeof categories>;
export type NewCategory = InferModel<typeof categories, 'insert'>;

export const categoriesRelations = relations(categories, ({ many }) => ({
  works: many(works),
}));

// ********** categories end ********** //

// ********** creator mappings start ********** //
export const creator_mappings = mysqlTable(
  'creator_mappings',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('userId').notNull(),
    workId: int('work_id').notNull(),
    isAuthor: boolean('is_author').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIndex: index('userId_idx').on(table.userId),
    workIdIndex: index('workId_idx').on(table.workId),
  }),
);

export const creatorMappingsRelations = relations(
  creator_mappings,
  ({ one }) => ({
    user: one(users, {
      fields: [creator_mappings.userId],
      references: [users.id],
    }),
    work: one(works, {
      fields: [creator_mappings.workId],
      references: [works.id],
    }),
  }),
);

// ********** creator mappings end ********** //

// ********** jobs start ********** //

export const jobs = mysqlTable('jobs', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type Job = InferModel<typeof jobs>;
export type NewJob = InferModel<typeof jobs, 'insert'>;

export const jobsRelations = relations(jobs, ({ many }) => ({
  jobMappings: many(job_mappings),
}));

// ********** jobs end ********** //

// ********** job mappings start ********** //
export const job_mappings = mysqlTable(
  'job_mappings',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('userId').notNull(),
    jobId: int('job_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIndex: index('userId_idx').on(table.userId),
    jobIdIndex: index('jobId_idx').on(table.jobId),
  }),
);

export const jobMappingsRelations = relations(job_mappings, ({ one }) => ({
  user: one(users, {
    fields: [job_mappings.userId],
    references: [users.id],
  }),
  job: one(jobs, {
    fields: [job_mappings.jobId],
    references: [jobs.id],
  }),
}));

// ********** job mappings end ********** //

// ********** link in bios start ********** //

export const link_in_bios = mysqlTable('link_in_bios', {
  id: int('id').autoincrement().primaryKey(),
  workId: int('work_id').notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  url: varchar('url', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type LinkInBio = InferModel<typeof link_in_bios>;
export type NewLinkInBil = InferModel<typeof link_in_bios, 'insert'>;

export const linkInBiosRelations = relations(link_in_bios, ({ one }) => ({
  work: one(works, {
    fields: [link_in_bios.workId],
    references: [works.id],
  }),
}));

// ********** link in bios end ********** //

// ********** socials start ********** //

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

export const socialsRelations = relations(socials, ({ one }) => ({
  user: one(users, {
    fields: [socials.userId],
    references: [users.id],
  }),
}));

// ********** socials end ********** //

// ********** tags start ********** //

export const tags = mysqlTable('tags', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type Tag = InferModel<typeof tags>;
export type NewTag = InferModel<typeof tags, 'insert'>;

export const tagsRelations = relations(tags, ({ many }) => ({
  tagMappings: many(tag_mappings),
}));

// ********** tags end ********** //

// ********** tag mappings end ********** //
export const tag_mappings = mysqlTable(
  'tag_mappings',
  {
    id: int('id').autoincrement().primaryKey(),
    workId: int('work_id').notNull(),
    tagId: int('tag_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    workIdIndex: index('workId_idx').on(table.workId),
    tagIdIndex: index('tagId_idx').on(table.tagId),
  }),
);

export type TagMapping = InferModel<typeof tag_mappings>;
export type NewTagMapping = InferModel<typeof tag_mappings, 'insert'>;

export const tagMappingsRelations = relations(tag_mappings, ({ one }) => ({
  work: one(works, {
    fields: [tag_mappings.workId],
    references: [works.id],
  }),
  tag: one(tags, {
    fields: [tag_mappings.tagId],
    references: [tags.id],
  }),
}));

// ********** tag mappings end ********** //

// ********** user account start ********** //

export const users = mysqlTable(
  'users',
  {
    id: int('id').autoincrement().primaryKey(),
    externalId: varchar('external_id', { length: 255 }).notNull(),
    attributes: json('attributes').notNull(),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    externalIdIndex: uniqueIndex('externalId_idx').on(table.externalId),
  }),
);

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;

export const usersRelations = relations(users, ({ many }) => ({
  jobMappings: many(job_mappings),
}));

// ********** user account end ********** //

// ********** works start ********** //

export const works = mysqlTable(
  'works',
  {
    id: int('id').autoincrement().primaryKey(),
    categoryId: int('category_id').notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    description: text('description').notNull(),
    mainImageUrl: varchar('main_image_url', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    categoryIdIndex: index('categoryId_idx').on(table.categoryId),
  }),
);

export type Work = InferModel<typeof works>;
export type NewWork = InferModel<typeof works, 'insert'>;

export const worksRelations = relations(works, ({ one, many }) => ({
  category: one(categories, {
    fields: [works.categoryId],
    references: [categories.id],
  }),
  workImages: many(work_images),
  linkInBios: many(link_in_bios),
  creatorMappings: many(creator_mappings),
  tagMappings: many(tag_mappings),
  assetMappings: many(asset_mappings),
}));

// ********** works end ********** //

// ********** work images start ********** //

export const work_images = mysqlTable(
  'work_images',
  {
    id: int('id').autoincrement().primaryKey(),
    workId: int('work_id').notNull(),
    imageUrl: varchar('image_url', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    workIdIndex: index('workId_idx').on(table.workId),
  }),
);

export type WorkImage = InferModel<typeof work_images>;
export type NewWorkImage = InferModel<typeof work_images, 'insert'>;

export const workImagesRelations = relations(work_images, ({ one }) => ({
  work: one(works, {
    fields: [work_images.workId],
    references: [works.id],
  }),
}));

// ********** work images end ********** //
