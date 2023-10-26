-- CreateTable
CREATE TABLE "works" (
    "id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_histories" (
    "id" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "user_account_id" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "likes_pkey" PRIMARY KEY ("user_account_id","work_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_categories" (
    "work_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_categories_pkey" PRIMARY KEY ("work_id","category_id")
);

-- CreateTable
CREATE TABLE "copyrights" (
    "id" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "copyrights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_copyrights" (
    "user_account_id" TEXT NOT NULL,
    "copyright_id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_copyrights_pkey" PRIMARY KEY ("user_account_id","copyright_id")
);

-- CreateTable
CREATE TABLE "anonymous_user_copyrights" (
    "anonymous_user_account_id" TEXT NOT NULL,
    "copyright_id" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anonymous_user_copyrights_pkey" PRIMARY KEY ("anonymous_user_account_id","copyright_id")
);

-- CreateIndex
CREATE INDEX "works_deleted_at_idx" ON "works"("deleted_at");

-- CreateIndex
CREATE INDEX "work_histories_title_published_work_id_idx" ON "work_histories"("title", "published", "work_id");

-- CreateIndex
CREATE INDEX "likes_user_account_id_work_id_idx" ON "likes"("user_account_id", "work_id");

-- CreateIndex
CREATE INDEX "categories_name_idx" ON "categories"("name");

-- CreateIndex
CREATE INDEX "work_categories_work_id_category_id_idx" ON "work_categories"("work_id", "category_id");

-- CreateIndex
CREATE INDEX "copyrights_name_idx" ON "copyrights"("name");

-- CreateIndex
CREATE INDEX "user_copyrights_user_account_id_copyright_id_idx" ON "user_copyrights"("user_account_id", "copyright_id");

-- CreateIndex
CREATE INDEX "anonymous_user_copyrights_anonymous_user_account_id_copyrig_idx" ON "anonymous_user_copyrights"("anonymous_user_account_id", "copyright_id");

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_histories" ADD CONSTRAINT "work_histories_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_categories" ADD CONSTRAINT "work_categories_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_categories" ADD CONSTRAINT "work_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_categories" ADD CONSTRAINT "work_categories_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "copyrights" ADD CONSTRAINT "copyrights_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "copyrights" ADD CONSTRAINT "copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_copyrights" ADD CONSTRAINT "user_copyrights_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_copyrights" ADD CONSTRAINT "user_copyrights_copyright_id_fkey" FOREIGN KEY ("copyright_id") REFERENCES "copyrights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_copyrights" ADD CONSTRAINT "user_copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_copyrights" ADD CONSTRAINT "anonymous_user_copyrights_anonymous_user_account_id_fkey" FOREIGN KEY ("anonymous_user_account_id") REFERENCES "anonymous_user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_copyrights" ADD CONSTRAINT "anonymous_user_copyrights_copyright_id_fkey" FOREIGN KEY ("copyright_id") REFERENCES "copyrights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anonymous_user_copyrights" ADD CONSTRAINT "anonymous_user_copyrights_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
