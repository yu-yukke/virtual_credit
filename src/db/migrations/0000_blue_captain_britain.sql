CREATE TABLE `socials` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int NOT NULL,
	`twitter_id` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`external_id` varchar(255) NOT NULL,
	`attributes` json NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE INDEX `userId_idx` ON `socials` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `externalId_idx` ON `users` (`external_id`);--> statement-breakpoint
ALTER TABLE `socials` ADD CONSTRAINT `socials_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;