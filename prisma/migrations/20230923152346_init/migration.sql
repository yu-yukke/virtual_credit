/*
  Warnings:

  - You are about to drop the column `socialId` on the `social_histories` table. All the data in the column will be lost.
  - Added the required column `social_id` to the `social_histories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "social_histories" DROP CONSTRAINT "social_histories_socialId_fkey";

-- AlterTable
ALTER TABLE "social_histories" DROP COLUMN "socialId",
ADD COLUMN     "social_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "social_histories" ADD CONSTRAINT "social_histories_social_id_fkey" FOREIGN KEY ("social_id") REFERENCES "socials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
