/*
  Warnings:

  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Work";

-- CreateTable
CREATE TABLE "works" (
    "id" TEXT NOT NULL,

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);
