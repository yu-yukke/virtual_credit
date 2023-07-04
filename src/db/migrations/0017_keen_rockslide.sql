CREATE TABLE `asset_mappings` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`work_id` int NOT NULL,
	`asset_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `assets` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`url` varchar(256) NOT NULL,
	`image_url` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `creator_mappings` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`userId` int NOT NULL,
	`work_id` int NOT NULL,
	`is_author` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `job_mappings` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`userId` int NOT NULL,
	`job_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `link_in_bios` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`work_id` int NOT NULL,
	`title` varchar(256) NOT NULL,
	`url` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `socials` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int NOT NULL,
	`twitter_id` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `tag_mappings` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`work_id` int NOT NULL,
	`tag_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`create_user_id` int NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`update_user_id` int NOT NULL);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`clerk_id` varchar(256) NOT NULL,
	`provider` varchar(256),
	`name` varchar(256) NOT NULL,
	`description` text,
	`cover_image_url` varchar(256),
	`thumbnail_image_url` varchar(256) NOT NULL,
	`is_public` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `work_images` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`work_id` int NOT NULL,
	`image_url` varchar(256) NOT NULL,
	`is_main` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `works` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`category_id` int NOT NULL,
	`name` varchar(256) NOT NULL,
	`description` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE INDEX `workId_idx` ON `asset_mappings` (`work_id`);--> statement-breakpoint
CREATE INDEX `assetId_idx` ON `asset_mappings` (`asset_id`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `creator_mappings` (`userId`);--> statement-breakpoint
CREATE INDEX `workId_idx` ON `creator_mappings` (`work_id`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `job_mappings` (`userId`);--> statement-breakpoint
CREATE INDEX `jobId_idx` ON `job_mappings` (`job_id`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `socials` (`user_id`);--> statement-breakpoint
CREATE INDEX `workId_idx` ON `tag_mappings` (`work_id`);--> statement-breakpoint
CREATE INDEX `tagId_idx` ON `tag_mappings` (`tag_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `clerkIdProvider_idx` ON `users` (`clerk_id`,`provider`);--> statement-breakpoint
CREATE INDEX `workId_idx` ON `work_images` (`work_id`);--> statement-breakpoint
CREATE INDEX `categoryId_idx` ON `works` (`category_id`);