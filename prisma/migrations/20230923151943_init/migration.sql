/*
  Warnings:

  - You are about to drop the column `instagramId` on the `social_histories` table. All the data in the column will be lost.
  - You are about to drop the column `websiteUrl` on the `social_histories` table. All the data in the column will be lost.
  - You are about to drop the column `xId` on the `social_histories` table. All the data in the column will be lost.
  - You are about to drop the column `userAccountId` on the `socials` table. All the data in the column will be lost.
  - You are about to drop the column `userAccountId` on the `user_account_histories` table. All the data in the column will be lost.
  - You are about to drop the `works` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[x_id]` on the table `social_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instagram_id]` on the table `social_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_account_id]` on the table `socials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_account_id` to the `socials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_account_id` to the `user_account_histories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "socials" DROP CONSTRAINT "socials_userAccountId_fkey";

-- DropForeignKey
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_userAccountId_fkey";

-- DropIndex
DROP INDEX "social_histories_instagramId_key";

-- DropIndex
DROP INDEX "social_histories_xId_key";

-- DropIndex
DROP INDEX "socials_userAccountId_idx";

-- DropIndex
DROP INDEX "socials_userAccountId_key";

-- DropIndex
DROP INDEX "user_account_histories_slug_published_userAccountId_idx";

-- AlterTable
ALTER TABLE "social_histories" DROP COLUMN "instagramId",
DROP COLUMN "websiteUrl",
DROP COLUMN "xId",
ADD COLUMN     "instagram_id" TEXT,
ADD COLUMN     "website_url" TEXT,
ADD COLUMN     "x_id" TEXT,
ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "socials" DROP COLUMN "userAccountId",
ADD COLUMN     "user_account_id" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user_account_histories" DROP COLUMN "userAccountId",
ADD COLUMN     "user_account_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_accounts" ALTER COLUMN "id" DROP DEFAULT;

-- DropTable
DROP TABLE "works";

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skills" (
    "user_account_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_skills_pkey" PRIMARY KEY ("user_account_id","skill_id")
);

-- CreateTable
CREATE TABLE "anonymous_user_account" (
    "id" TEXT NOT NULL,
    "user_account_id" TEXT,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anonymous_user_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "release_notes" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "release_notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- CreateIndex
CREATE INDEX "user_skills_user_account_id_skill_id_idx" ON "user_skills"("user_account_id", "skill_id");

-- CreateIndex
CREATE UNIQUE INDEX "anonymous_user_account_user_account_id_key" ON "anonymous_user_account"("user_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "anonymous_user_account_name_key" ON "anonymous_user_account"("name");

-- CreateIndex
CREATE INDEX "anonymous_user_account_name_idx" ON "anonymous_user_account"("name");

-- CreateIndex
CREATE UNIQUE INDEX "social_histories_x_id_key" ON "social_histories"("x_id");

-- CreateIndex
CREATE UNIQUE INDEX "social_histories_instagram_id_key" ON "social_histories"("instagram_id");

-- CreateIndex
CREATE UNIQUE INDEX "socials_user_account_id_key" ON "socials"("user_account_id");

-- CreateIndex
CREATE INDEX "socials_user_account_id_idx" ON "socials"("user_account_id");

-- CreateIndex
CREATE INDEX "user_account_histories_name_slug_published_user_account_id_idx" ON "user_account_histories"("name", "slug", "published", "user_account_id");

-- AddForeignKey
ALTER TABLE "user_account_histories" ADD CONSTRAINT "user_account_histories_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_account" ADD CONSTRAINT "anonymous_user_account_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_account" ADD CONSTRAINT "anonymous_user_account_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
