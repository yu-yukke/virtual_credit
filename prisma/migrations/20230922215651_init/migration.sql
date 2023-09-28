/*
  Warnings:

  - The primary key for the `social_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `socials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_account_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `social_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[xId]` on the table `social_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instagramId]` on the table `social_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `socials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `user_account_histories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `user_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "social_histories" DROP CONSTRAINT "social_histories_socialId_fkey";

-- DropForeignKey
ALTER TABLE "socials" DROP CONSTRAINT "socials_userAccountId_fkey";

-- DropForeignKey
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_userAccountId_fkey";

-- AlterTable
ALTER TABLE "social_histories" DROP CONSTRAINT "social_histories_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "socialId" SET DATA TYPE TEXT,
ALTER COLUMN "websiteUrl" SET DATA TYPE TEXT,
ALTER COLUMN "xId" SET DATA TYPE TEXT,
ALTER COLUMN "instagramId" SET DATA TYPE TEXT,
ADD CONSTRAINT "social_histories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "socials" DROP CONSTRAINT "socials_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userAccountId" SET DATA TYPE TEXT,
ADD CONSTRAINT "socials_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userAccountId" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "slug" SET DATA TYPE TEXT,
ALTER COLUMN "thumbnail_image_url" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_account_histories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_accounts" DROP CONSTRAINT "user_accounts_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_accounts_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "social_histories_id_key" ON "social_histories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "social_histories_xId_key" ON "social_histories"("xId");

-- CreateIndex
CREATE UNIQUE INDEX "social_histories_instagramId_key" ON "social_histories"("instagramId");

-- CreateIndex
CREATE UNIQUE INDEX "socials_id_key" ON "socials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_account_histories_id_key" ON "user_account_histories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_accounts_id_key" ON "user_accounts"("id");

-- AddForeignKey
ALTER TABLE "user_account_histories" ADD CONSTRAINT "user_account_histories_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_histories" ADD CONSTRAINT "social_histories_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "socials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
