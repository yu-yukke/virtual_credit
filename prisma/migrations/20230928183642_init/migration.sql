/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `copyrights` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `work_relation_categories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "copyrights_name_key" ON "copyrights"("name");

-- CreateIndex
CREATE UNIQUE INDEX "work_relation_categories_name_key" ON "work_relation_categories"("name");
