/*
  Warnings:

  - You are about to drop the `social_histories` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[x_id]` on the table `socials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instagram_id]` on the table `socials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `work_images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "social_histories" DROP CONSTRAINT "social_histories_social_id_fkey";

-- AlterTable
ALTER TABLE "socials" ADD COLUMN     "instagram_id" TEXT,
ADD COLUMN     "website_url" TEXT,
ADD COLUMN     "x_id" TEXT;

-- AlterTable
ALTER TABLE "work_images" ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "social_histories";

-- CreateIndex
CREATE UNIQUE INDEX "socials_x_id_key" ON "socials"("x_id");

-- CreateIndex
CREATE UNIQUE INDEX "socials_instagram_id_key" ON "socials"("instagram_id");
