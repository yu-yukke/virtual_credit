-- DropIndex
DROP INDEX "social_histories_id_key";

-- DropIndex
DROP INDEX "socials_id_key";

-- DropIndex
DROP INDEX "user_account_histories_id_key";

-- DropIndex
DROP INDEX "user_accounts_id_key";

-- AlterTable
ALTER TABLE "user_account_histories" ALTER COLUMN "id" DROP DEFAULT;
