/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `likes` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_account_histories_name_slug_published_user_account_id_idx";

-- DropIndex
DROP INDEX "work_histories_title_published_work_id_idx";

-- DropIndex
DROP INDEX "work_relation_categories_work_id_name_idx";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "deleted_at";

-- CreateIndex
CREATE INDEX "social_histories_social_id_idx" ON "social_histories"("social_id");

-- CreateIndex
CREATE INDEX "user_account_histories_name_idx" ON "user_account_histories"("name");

-- CreateIndex
CREATE INDEX "user_account_histories_slug_idx" ON "user_account_histories"("slug");

-- CreateIndex
CREATE INDEX "user_account_histories_published_idx" ON "user_account_histories"("published");

-- CreateIndex
CREATE INDEX "user_account_histories_user_account_id_idx" ON "user_account_histories"("user_account_id");

-- CreateIndex
CREATE INDEX "work_histories_title_idx" ON "work_histories"("title");

-- CreateIndex
CREATE INDEX "work_histories_published_idx" ON "work_histories"("published");

-- CreateIndex
CREATE INDEX "work_histories_work_id_idx" ON "work_histories"("work_id");

-- CreateIndex
CREATE INDEX "work_images_deleted_at_idx" ON "work_images"("deleted_at");

-- CreateIndex
CREATE INDEX "work_relation_categories_work_id_idx" ON "work_relation_categories"("work_id");

-- CreateIndex
CREATE INDEX "work_relation_categories_name_idx" ON "work_relation_categories"("name");
