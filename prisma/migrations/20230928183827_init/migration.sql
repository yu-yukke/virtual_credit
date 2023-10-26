-- DropIndex
DROP INDEX "work_relations_work_relation_category_id_name_idx";

-- CreateIndex
CREATE INDEX "work_relations_work_relation_category_id_idx" ON "work_relations"("work_relation_category_id");

-- CreateIndex
CREATE INDEX "work_relations_name_idx" ON "work_relations"("name");
