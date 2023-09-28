/*
  Warnings:

  - The primary key for the `user_account_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_account_histories` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `userAccountId` on the `user_account_histories` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The primary key for the `user_accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_accounts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- DropForeignKey
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_userAccountId_fkey";

-- AlterTable
ALTER TABLE "user_account_histories" DROP CONSTRAINT "user_account_histories_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "userAccountId" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "user_account_histories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_accounts" DROP CONSTRAINT "user_accounts_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "user_accounts_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "socials" (
    "id" VARCHAR(255) NOT NULL DEFAULT gen_random_uuid(),
    "userAccountId" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_histories" (
    "id" VARCHAR(255) NOT NULL DEFAULT gen_random_uuid(),
    "socialId" VARCHAR(255) NOT NULL,
    "websiteUrl" VARCHAR(255),
    "xId" VARCHAR(255),
    "instagramId" VARCHAR(255),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "socials_userAccountId_key" ON "socials"("userAccountId");

-- CreateIndex
CREATE INDEX "socials_userAccountId_idx" ON "socials"("userAccountId");

-- AddForeignKey
ALTER TABLE "user_account_histories" ADD CONSTRAINT "user_account_histories_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_histories" ADD CONSTRAINT "social_histories_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "socials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
