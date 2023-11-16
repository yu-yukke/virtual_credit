/*
  Warnings:

  - You are about to drop the column `published` on the `work_histories` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "work_histories_published_idx";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "published_at" TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "work_histories" DROP COLUMN "published";

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "published_at" TIMESTAMPTZ(3);

-- CreateIndex
CREATE INDEX "works_published_idx" ON "works"("published");
