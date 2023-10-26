-- CreateTable
CREATE TABLE "work_images" (
    "id" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "work_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_tags" (
    "work_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_tags_pkey" PRIMARY KEY ("work_id","tag_id")
);

-- CreateTable
CREATE TABLE "work_relation_categories" (
    "id" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_relation_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_relations" (
    "id" TEXT NOT NULL,
    "work_relation_category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_relations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "work_images_work_id_idx" ON "work_images"("work_id");

-- CreateIndex
CREATE INDEX "tags_name_idx" ON "tags"("name");

-- CreateIndex
CREATE INDEX "work_tags_work_id_tag_id_idx" ON "work_tags"("work_id", "tag_id");

-- CreateIndex
CREATE INDEX "work_relation_categories_work_id_name_idx" ON "work_relation_categories"("work_id", "name");

-- CreateIndex
CREATE INDEX "work_relations_work_relation_category_id_name_idx" ON "work_relations"("work_relation_category_id", "name");

-- AddForeignKey
ALTER TABLE "work_images" ADD CONSTRAINT "work_images_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_tags" ADD CONSTRAINT "work_tags_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_tags" ADD CONSTRAINT "work_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_tags" ADD CONSTRAINT "work_tags_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relation_categories" ADD CONSTRAINT "work_relation_categories_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relation_categories" ADD CONSTRAINT "work_relation_categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relations" ADD CONSTRAINT "work_relations_work_relation_category_id_fkey" FOREIGN KEY ("work_relation_category_id") REFERENCES "work_relation_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_relations" ADD CONSTRAINT "work_relations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
