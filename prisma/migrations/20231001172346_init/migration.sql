/*
  Warnings:

  - The primary key for the `anonymous_user_copyrights` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `anonymous_user_account_id` on the `anonymous_user_copyrights` table. All the data in the column will be lost.
  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_account_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `user_account_id` on the `socials` table. All the data in the column will be lost.
  - The primary key for the `user_copyrights` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_account_id` on the `user_copyrights` table. All the data in the column will be lost.
  - The primary key for the `user_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_account_id` on the `user_skills` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `work_images` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `works` table. All the data in the column will be lost.
  - You are about to drop the `anonymous_user_account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_account_histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_accounts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `socials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anonymous_user_id` to the `anonymous_user_copyrights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `socials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_copyrights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_skills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anonymous_user_account" DROP CONSTRAINT "anonymous_user_account_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "anonymous_user_account" DROP CONSTRAINT "anonymous_user_account_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "anonymous_user_copyrights" DROP CONSTRAINT "anonymous_user_copyrights_anonymous_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "anonymous_user_copyrights" DROP CONSTRAINT "anonymous_user_copyrights_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "copyrights" DROP CONSTRAINT "copyrights_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "socials" DROP CONSTRAINT "socials_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "user_copyrights" DROP CONSTRAINT "user_copyrights_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "user_copyrights" DROP CONSTRAINT "user_copyrights_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "user_skills" DROP CONSTRAINT "user_skills_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "user_skills" DROP CONSTRAINT "user_skills_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "work_categories" DROP CONSTRAINT "work_categories_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "work_relation_categories" DROP CONSTRAINT "work_relation_categories_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "work_relations" DROP CONSTRAINT "work_relations_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "work_tags" DROP CONSTRAINT "work_tags_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_created_by_id_fkey";

-- DropIndex
DROP INDEX "anonymous_user_copyrights_anonymous_user_account_id_copyrig_idx";

-- DropIndex
DROP INDEX "likes_user_account_id_work_id_idx";

-- DropIndex
DROP INDEX "socials_user_account_id_idx";

-- DropIndex
DROP INDEX "socials_user_account_id_key";

-- DropIndex
DROP INDEX "user_copyrights_user_account_id_copyright_id_idx";

-- DropIndex
DROP INDEX "user_skills_user_account_id_skill_id_idx";

-- DropIndex
DROP INDEX "work_images_deleted_at_idx";

-- DropIndex
DROP INDEX "works_deleted_at_idx";

-- AlterTable
ALTER TABLE "anonymous_user_copyrights" DROP CONSTRAINT "anonymous_user_copyrights_pkey",
DROP COLUMN "anonymous_user_account_id",
ADD COLUMN     "anonymous_user_id" TEXT NOT NULL,
ADD CONSTRAINT "anonymous_user_copyrights_pkey" PRIMARY KEY ("anonymous_user_id", "copyright_id");

-- AlterTable
ALTER TABLE "likes" DROP CONSTRAINT "likes_pkey",
DROP COLUMN "user_account_id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "likes_pkey" PRIMARY KEY ("user_id", "work_id");

-- AlterTable
ALTER TABLE "socials" DROP COLUMN "user_account_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_copyrights" DROP CONSTRAINT "user_copyrights_pkey",
DROP COLUMN "user_account_id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "user_copyrights_pkey" PRIMARY KEY ("user_id", "copyright_id");

-- AlterTable
ALTER TABLE "user_skills" DROP CONSTRAINT "user_skills_pkey",
DROP COLUMN "user_account_id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "user_skills_pkey" PRIMARY KEY ("user_id", "skill_id");

-- AlterTable
ALTER TABLE "work_images" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "works" DROP COLUMN "deleted_at";

-- DropTable
DROP TABLE "anonymous_user_account";

-- DropTable
DROP TABLE "user_account_histories";

-- DropTable
DROP TABLE "user_accounts";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMPTZ(3),
    "image" TEXT,
    "slug" TEXT,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMPTZ(3) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verifications_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMPTZ(3) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "anonymous_users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anonymous_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_slug_key" ON "users"("slug");

-- CreateIndex
CREATE INDEX "users_name_idx" ON "users"("name");

-- CreateIndex
CREATE INDEX "users_slug_idx" ON "users"("slug");

-- CreateIndex
CREATE INDEX "users_published_idx" ON "users"("published");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verifications_tokens_token_key" ON "verifications_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verifications_tokens_identifier_token_key" ON "verifications_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "anonymous_users_user_id_key" ON "anonymous_users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "anonymous_users_name_key" ON "anonymous_users"("name");

-- CreateIndex
CREATE INDEX "anonymous_users_name_idx" ON "anonymous_users"("name");

-- CreateIndex
CREATE INDEX "anonymous_user_copyrights_anonymous_user_id_copyright_id_idx" ON "anonymous_user_copyrights"("anonymous_user_id", "copyright_id");

-- CreateIndex
CREATE INDEX "likes_user_id_work_id_idx" ON "likes"("user_id", "work_id");

-- CreateIndex
CREATE UNIQUE INDEX "socials_user_id_key" ON "socials"("user_id");

-- CreateIndex
CREATE INDEX "socials_user_id_idx" ON "socials"("user_id");

-- CreateIndex
CREATE INDEX "user_copyrights_user_id_copyright_id_idx" ON "user_copyrights"("user_id", "copyright_id");

-- CreateIndex
CREATE INDEX "user_skills_user_id_skill_id_idx" ON "user_skills"("user_id", "skill_id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_users" ADD CONSTRAINT "anonymous_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_users" ADD CONSTRAINT "anonymous_users_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_tags" ADD CONSTRAINT "work_tags_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_categories" ADD CONSTRAINT "work_categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relation_categories" ADD CONSTRAINT "work_relation_categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relations" ADD CONSTRAINT "work_relations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "copyrights" ADD CONSTRAINT "copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_copyrights" ADD CONSTRAINT "user_copyrights_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_copyrights" ADD CONSTRAINT "user_copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_copyrights" ADD CONSTRAINT "anonymous_user_copyrights_anonymous_user_id_fkey" FOREIGN KEY ("anonymous_user_id") REFERENCES "anonymous_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_copyrights" ADD CONSTRAINT "anonymous_user_copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
