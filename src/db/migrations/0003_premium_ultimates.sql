ALTER TABLE `work_images` ADD `is_main` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `works` DROP COLUMN `main_image_url`;