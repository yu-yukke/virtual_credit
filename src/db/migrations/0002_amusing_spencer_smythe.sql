DROP INDEX `assetId_idx` ON `asset_mappings`;--> statement-breakpoint
ALTER TABLE `asset_mappings` ADD `asset_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `asset_mappings` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `assets` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `categories` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `creator_mappings` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `job_mappings` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `jobs` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `tag_mappings` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `tags` ADD `update_user_id` int NOT NULL;--> statement-breakpoint
CREATE INDEX `assetId_idx` ON `asset_mappings` (`asset_id`);--> statement-breakpoint
ALTER TABLE `asset_mappings` DROP COLUMN `tag_id`;