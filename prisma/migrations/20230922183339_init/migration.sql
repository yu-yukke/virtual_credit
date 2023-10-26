-- AlterTable
ALTER TABLE "user_accounts" ADD COLUMN     "deleted_at" TIMESTAMPTZ(3);

-- CreateTable
CREATE TABLE "user_account_histories" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userAccountId" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail_image_url" VARCHAR(255) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_account_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_account_histories_slug_key" ON "user_account_histories"("slug");

-- CreateIndex
CREATE INDEX "user_account_histories_slug_published_userAccountId_idx" ON "user_account_histories"("slug", "published", "userAccountId");

-- CreateIndex
CREATE INDEX "user_accounts_deleted_at_idx" ON "user_accounts"("deleted_at");

-- AddForeignKey
ALTER TABLE "user_account_histories" ADD CONSTRAINT "user_account_histories_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
