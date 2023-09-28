/*
  Warnings:

  - Added the required column `title` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "works" ADD COLUMN     "title" TEXT NOT NULL;
