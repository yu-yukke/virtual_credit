/*
  Warnings:

  - Added the required column `url` to the `work_relations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "work_relations" ADD COLUMN     "url" TEXT NOT NULL;
